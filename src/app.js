import Carrot from "./components/Carrot.js";
import LoadRabbit from "./components/Rabbit.js";
import MoveRabbit from "./components/moveRabbit.js";
import PlayGame from "./components/PlayGame.js";

class App {
  constructor() {
    const rabbit = new MoveRabbit(document.querySelector("#app"));
    rabbit.setEvent();
    const carrot = new Carrot(document.querySelector("#app"));
    new PlayGame({
      elem: document.querySelector("#app"),
      carrotYPos: carrot.yPos,
    });
  }
}

new App();
