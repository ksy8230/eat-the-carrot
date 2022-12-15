import Carrot from "./components/Carrot.js";
import MoveRabbit from "./components/moveRabbit.js";
import PlayGame from "./components/PlayGame.js";

class App {
  constructor() {
    const app = document.querySelector("#app");
    const rabbit = new MoveRabbit(app);
    const carrot = new Carrot(app);
    new PlayGame({
      elem: app,
      rabbit: rabbit,
      carrot: carrot,
    });
  }
}

new App();
