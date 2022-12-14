export default class PlayGame {
  constructor(data) {
    this.elem = data.elem;
    this.carrotYPos = data.carrotYPos;
    this.rabbitXPos = data.rabbitXPos;
    this.rabbitYPos = data.rabbitYPos;
    this.carrotElem = data.carrotElem;
    this.rabbitElem = data.rabbitElem;
    this.startPlay();
  }

  startPlay() {
    if (this.carrotYPos >= this.rabbitYPos) {
      this.elem.remove(this.carrotElem);
    }
  }

  stopPlay() {}
}
