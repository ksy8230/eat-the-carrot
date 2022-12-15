import Carrot from "./components/Carrot.js";
import LoadRabbit from "./components/Rabbit.js";
import MoveRabbit from "./components/moveRabbit.js";
import PlayGame from "./components/PlayGame.js";

class App {
  constructor() {
    const rabbit = new MoveRabbit(document.querySelector("#app"));
    // rabbit.setEvent();
    const carrot = new Carrot(document.querySelector("#app"));
    const game = new PlayGame({
      elem: document.querySelector("#app"),
      rabbit: rabbit,
      carrot: carrot,
      carrotElem: carrot.carrotElem,
    });
    game.setEvent();
  }
}

new App();
