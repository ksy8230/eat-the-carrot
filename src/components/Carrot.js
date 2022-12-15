export default class Carrot {
  xPos;
  yPos;
  carrotElem;
  constructor(elem) {
    this.elem = elem;
    this.makeRandom();
  }

  template() {
    return `<div class="carrot">🥕</div>`;
  }

  setPositionY(currentCarrotElem) {
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
        // console.log(this.yPos)
      }
    }
  }

  setPositionX(currentCarrotElem) {
    const randomXPos = Math.random() * 800; // window.width
    this.xPos = randomXPos;
    currentCarrotElem.style.cssText = `position:absolute;left:${randomXPos}px;`;
  }

  render() {
    const carrotsElem = document.createElement("div");
    carrotsElem.innerHTML = this.template();
    this.setPositionX(carrotsElem);
    this.setPositionY(carrotsElem);
    this.elem.append(carrotsElem);
    // console.log(carrotsElem)
    this.carrotElem = carrotsElem;
  }

  makeRandom() {
    let id;
    clearInterval(id);
    id = setInterval(() => {
      this.render();
    }, 10000);
  }
}
