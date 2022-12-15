import Carrot from "./components/Carrot.js";
import MoveRabbit from "./components/moveRabbit.js";
import PlayGame from "./components/PlayGame.js";

class App {
  constructor() {
    const rabbit = new MoveRabbit(document.querySelector("#app"));
    const carrot = new Carrot(document.querySelector("#app"), rabbit);
    new PlayGame({
      elem: document.querySelector("#app"),
      rabbit: rabbit,
      carrot: carrot,
    });
  }
}

new App();
