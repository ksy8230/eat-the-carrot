export default class PlayGame {
  constructor(data) {
    console.log(data)
    this.elem = data.elem;
    this.rabbit = data.rabbit;
    this.carrot = data.carrot;
    this.carrotYPos = data.carrotYPos;
    this.rabbitXPos = data.rabbitXPos;
    this.rabbitYPos = data.rabbitYPos;
    this.carrotElem = data.carrotElem;
    this.rabbitElem = data.rabbitElem;
    this.startPlay();
  }

  setEvent() {
    document.onkeydown = e => {
      if(e.keyCode == '37'){


        this.rabbit.moveLeft();
        this.rabbit.getPosition();

        console.log('carrot', this.carrot.carrotElem.offsetTop)
        console.log('rabbit', this.rabbit.rabbitElem.offsetTop)
        if(this.carrot.carrotElem.offsetTop > this.rabbit.rabbitElem.offsetTop) {
          console.log('rabbit height over!')
          this.carrot.carrotElem.remove()
        }
      }
      if(e.keyCode == '39'){
        console.log('this.carrotYPos', this.carrotYPos)

        this.rabbit.moveRight()
      }
    }
  }

  startPlay() {
    console.log('this.carrotYPos', this.carrotYPos)
    if (this.carrotYPos >= this.rabbitYPos) {
      this.elem.remove(this.carrotElem);
    }
  }

  stopPlay() {}
}
