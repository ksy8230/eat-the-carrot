import LoadRabbit from "./Rabbit.js";

export default class MoveRabbit extends LoadRabbit {
  moveLeft() {
    const rabbitElem = this.elem.querySelector("#rabbit");
    const rabbitRect = rabbitElem.getBoundingClientRect();
    rabbitElem.style.left = rabbitRect.x - 5 + "px";
  }
  moveRight() {
    const rabbitElem = this.elem.querySelector("#rabbit");
    const rabbitRect = rabbitElem.getBoundingClientRect();
    rabbitElem.style.left = rabbitRect.x + 5 + "px";
  }

  getPosition() {
    const rabbitElem = this.elem.querySelector("#rabbit");
    const rabbitRect = rabbitElem.getBoundingClientRect();
    this.xPos = rabbitRect.x; // 토끼 왼쪽끝
    this.yPos = rabbitRect.y; // 토끼 맨위
  }
}
