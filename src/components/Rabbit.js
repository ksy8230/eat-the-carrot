import { RABBIT_HEIGHT, RABBIT_WIDTH } from "./PlayGame.js";

export default class LoadRabbit {
  xPos;
  hPos;
  constructor(elem) {
    this.elem = elem;
    this.render();
  }

  template() {
    return `<div id="rabbit"></div>`;
  }

  render() {
    this.elem.innerHTML = this.template();
    const rabbitElem = document.querySelector("#rabbit");
    rabbitElem.style.cssText = `position:absolute;width:${RABBIT_WIDTH}px;height:${RABBIT_HEIGHT}px;left:50%;bottom:0;background-image: url("./src/images/rabbit.png");`;
  }

  init() {
    const rabbitElem = document.querySelector("#rabbit");
    rabbitElem.style.cssText = `position:absolute;width:${RABBIT_WIDTH}px;height:${RABBIT_HEIGHT}px;left:50%;bottom:0;background-image: url("./src/images/rabbit.png");`;
  }
}
