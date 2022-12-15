import LoadRabbit from "./Rabbit.js";

export default class MoveRabbit extends LoadRabbit {
  // setEvent() { // no
  //   document.onkeydown = (e) => {
  //     if (e.keyCode == "37") {
  //       this.moveLeft();
  //     }
  //     if (e.keyCode == "39") {
  //       this.moveRight();
  //     }
  //   };
  // }

  moveLeft() {
    const rabbitElem = this.elem.querySelector("#rabbit");
    const rabbitRect = rabbitElem.getBoundingClientRect();
    rabbitElem.style.left = rabbitRect.x - 10 + "px";
  }
  moveRight() {
    const rabbitElem = this.elem.querySelector("#rabbit");
    const rabbitRect = rabbitElem.getBoundingClientRect();
    rabbitElem.style.left = rabbitRect.x + 10 + "px";
  }

  getPosition() {
    const rabbitElem = this.elem.querySelector("#rabbit");
    const rabbitRect = rabbitElem.getBoundingClientRect();
    this.xPos = rabbitRect.x;
    this.yPos = rabbitRect.y;
    this.rabbitElem = rabbitElem;
  }
}
