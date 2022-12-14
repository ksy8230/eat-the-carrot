export default class Carrot {
  xPos;
  yPos;
  constructor(elem) {
    this.elem = elem;
    this.makeRandom();
  }

  template() {
    return `<div class="carrot">🥕</div>`;
  }

  moveDown(currentCarrotElem) {
    const carrot = currentCarrotElem;
    let y = 0;
    let id;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (y == 800) {
        clearInterval(id);
      } else {
        y++;
        carrot.style.top = y + "px";
        this.yPos = y;
      }
    }
  }

  setRandomPosition(currentCarrotElem) {
    const randomXPos = Math.random() * 800; // window.width
    // const YPos = currentCarrotElem.getBoundingClientRect().y;
    // console.log("YPos", YPos);
    this.xPos = randomXPos;
    currentCarrotElem.style.cssText = `position:absolute;left:${randomXPos}px;`;
  }

  render() {
    const carrotsElem = document.createElement("div");
    carrotsElem.innerHTML = this.template();
    this.setRandomPosition(carrotsElem);
    this.moveDown(carrotsElem);
    this.elem.append(carrotsElem);
  }

  makeRandom() {
    let id;
    clearInterval(id);
    id = setInterval(() => {
      this.render();
    }, 3000);
  }
}
