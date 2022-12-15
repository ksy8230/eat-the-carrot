export default class PlayGame {
  keys = [];
  score = 0;
  makeCarrotTimer;
  gameTimer;

  constructor(data) {
    this.elem = data.elem;
    this.rabbit = data.rabbit;
    this.carrot = data.carrot;
    this.render();
    this.setEventButton();
  }

  template() {
    return `
    <button id="game-play">play</button>
    <button id="game-stop">stop</button>
    <button id="game-reset">reset</button>`;
  }

  moveRabbit() {
    if (this.keys["ArrowLeft"]) this.rabbit.moveLeft();
    if (this.keys["ArrowRight"]) this.rabbit.moveRight();
  }

  makeCarrotRandom() {
    clearInterval(this.makeCarrotTimer);
    this.makeCarrotTimer = setInterval(() => {
      this.carrot.render();
    }, 1000);
  }

  deleteCarrot(carrot, index) {
    this.carrot.carrotsList.splice(index, 1);
    carrot.elem.remove();
  }

  rules(carrot, index) {
    // 당근이 바닥이면
    if (carrot.y > FRAME_HEIGHT - CARROT_HEIGHT) {
      this.deleteCarrot(carrot, index);
      if (this.score) {
        this.score -= 1;
        console.log("lose score!", this.score);
      }
    } else {
      // 당근이 바닥이 아니고 토끼 영역에 닿으면
      if (
        this.rabbit.xPos + RABBIT_WIDTH >= carrot.x &&
        this.rabbit.xPos <= carrot.x + CARROT_WIDTH &&
        this.rabbit.yPos <= carrot.y + CARROT_HEIGHT &&
        this.rabbit.yPos + RABBIT_HEIGHT >= carrot.y
      ) {
        this.deleteCarrot(carrot);
        this.score += 1;
        console.log("got score!", this.score);
      }
    }
  }

  game() {
    const animate = () => {
      this.moveRabbit();

      this.carrot.carrotsList.forEach((carrot, index) => {
        this.carrot.setPosition(carrot);
        this.rabbit.getPosition();
        this.rules(carrot, index);
      });
      this.gameTimer = requestAnimationFrame(animate);
    };
    this.gameTimer = requestAnimationFrame(animate);
  }

  keyEvent() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.keys[e.key] = true;
      if (e.key === "ArrowRight") this.keys[e.key] = true;
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") this.keys[e.key] = false;
      if (e.key === "ArrowRight") this.keys[e.key] = false;
    });
  }

  startPlay() {
    this.makeCarrotRandom();
    this.game();
    this.keyEvent();
  }

  stopPlay() {
    cancelAnimationFrame(this.gameTimer);
    clearInterval(this.makeCarrotTimer);
  }

  resetPlay() {
    this.stopPlay();
    this.score = 0;
    this.keys = [];
    this.carrot.init();
    this.rabbit.init();
  }

  setEventButton() {
    const playButton = this.elem.querySelector("#game-play");
    playButton.addEventListener("click", () => this.startPlay());
    const stopButton = this.elem.querySelector("#game-stop");
    stopButton.addEventListener("click", () => this.stopPlay());
    const resetButton = this.elem.querySelector("#game-reset");
    resetButton.addEventListener("click", () => this.resetPlay());
  }

  render() {
    const buttonsElems = document.createElement("div");
    buttonsElems.innerHTML = this.template();
    this.elem.append(buttonsElems);
  }
}

export const FRAME_WIDTH = 500;
export const FRAME_HEIGHT = 500;
export const CARROT_WIDTH = 20;
export const CARROT_HEIGHT = 20;
export const RABBIT_WIDTH = 50;
export const RABBIT_HEIGHT = 50;
