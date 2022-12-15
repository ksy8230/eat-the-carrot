export default class Carrot {
  xPos;
  yPos;
  carrotElem;
  carrotsList = [];
  score = 0;
  keys = [];
  constructor(elem, rabbit) {
    this.elem = elem;
    this.rabbit = rabbit;
    this.makeRandom();
  }

  template() {
    return `<div class="carrot">🥕</div>`;
  }

  setPositionX(currentCarrotElem) {
    const randomXPos = Math.random() * (FRAME_WIDTH - CARROT_WIDTH); // window.width
    this.xPos = randomXPos;
    currentCarrotElem.style.cssText = `position:absolute;left:${randomXPos}px;width:20px;height:20px;`;
  }

  render() {
    // > create carrot
    const carrotsElem = document.createElement("div");
    carrotsElem.innerHTML = this.template();
    this.setPositionX(carrotsElem);
    this.elem.append(carrotsElem);
    const carrotRect = carrotsElem.getBoundingClientRect();
    let position = {
      x: carrotRect.x, // 당근 왼쪽끝
      y: carrotRect.y, // 당근 맨위
      elem: carrotsElem,
    };
    this.carrotsList.push(position);
  }

  makeRandom() {
    // > make carrot setInterval 500
    let makeCarrotTimer;
    clearInterval(makeCarrotTimer);
    makeCarrotTimer = setInterval(() => {
      this.render();
    }, 1000);

    // > update carrot position requestAnimationFrame
    let updateCarrot;
    const animate = () => {
      // rabbit
      if (this.keys["ArrowLeft"]) {
        this.rabbit.moveLeft();
      }
      if (this.keys["ArrowRight"]) {
        this.rabbit.moveRight();
      }

      // carrot
      this.carrotsList.forEach((carrot, index) => {
        const y = carrot.y;
        carrot.y = y + 1;
        carrot.elem.style.top = carrot.y + "px";
        this.rabbit.getPosition();

        // carrot is drop the floor 😣
        if (carrot.y > FRAME_HEIGHT - CARROT_HEIGHT) {
          this.carrotsList.splice(index, 1);
          carrot.elem.remove();
          if (this.score) {
            this.score -= 1;
            console.log("lose score!", this.score);
          }
        } else {
          // rabbit catch the carrot! 🙂
          // 토끼 x축 + 토끼 너비 >= 당근 x축 &&
          // 토끼 x축 <= 당근 x축 + 당근 너비 &&
          // 토끼 y축 <= 당근 y축 + 당근 높이 &&
          // 토끼 y축 + 토끼 높이 >= 당근 y축
          if (
            this.rabbit.xPos + RABBIT_WIDTH >= carrot.x &&
            this.rabbit.xPos <= carrot.x + CARROT_WIDTH &&
            this.rabbit.yPos <= carrot.y + CARROT_HEIGHT &&
            this.rabbit.yPos + RABBIT_HEIGHT >= carrot.y
          ) {
            this.carrotsList.splice(index, 1);
            carrot.elem.remove();
            this.score += 1;
            console.log("gor score!", this.score);
          }
        }
      });
      updateCarrot = requestAnimationFrame(animate);
    };
    updateCarrot = requestAnimationFrame(animate);

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.keys[e.key] = true;
      if (e.key === "ArrowRight") this.keys[e.key] = true;
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") this.keys[e.key] = false;
      if (e.key === "ArrowRight") this.keys[e.key] = false;
    });
  }
}

const FRAME_WIDTH = 500;
const FRAME_HEIGHT = 500;
const CARROT_WIDTH = 20;
const CARROT_HEIGHT = 20;
const RABBIT_WIDTH = 50;
const RABBIT_HEIGHT = 50;
