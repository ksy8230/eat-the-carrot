import { CARROT_HEIGHT, CARROT_WIDTH, FRAME_WIDTH } from "./PlayGame.js";

export default class Carrot {
  carrotsList = [];

  constructor(elem) {
    this.elem = elem;
  }

  template() {
    return `🥕`;
  }

  setPosition(currentCarrot) {
    const y = currentCarrot.y;
    currentCarrot.y = y + 1;
    currentCarrot.elem.style.left = currentCarrot.x + "px";
    currentCarrot.elem.style.top = currentCarrot.y + "px";
  }

  initCarrotsPosition(carrotsElem) {
    let position = {
      x: Math.random() * (FRAME_WIDTH - CARROT_WIDTH), // 당근 왼쪽끝
      y: 0, // 당근 맨위
      elem: carrotsElem,
    };
    this.carrotsList.push(position);
  }

  // > create carrot
  render() {
    const carrotsElem = document.createElement("div");
    carrotsElem.innerHTML = this.template();
    carrotsElem.classList.add("carrot");
    carrotsElem.style.cssText = `position:absolute;width:${CARROT_WIDTH}px;height:${CARROT_HEIGHT}px;`;
    this.elem.append(carrotsElem);
    this.initCarrotsPosition(carrotsElem);
  }

  init() {
    this.carrotsList = [];
    document.querySelectorAll(".carrot").forEach((elem) => elem.remove());
  }
}
