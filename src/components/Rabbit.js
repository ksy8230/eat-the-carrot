export default class LoadRabbit {
  xPos;
  hPos;
  constructor(elem) {
    this.elem = elem;
    this.render();
  }

  template() {
    return `<div id="rabbit">🐰</div>`;
  }

  render() {
    this.elem.innerHTML = this.template();
  }
}
