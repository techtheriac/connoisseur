import EventEmitter from "events";
import gsap from "gsap";
let instance;

export default class Animations extends EventEmitter {
  constructor(container) {
    super();
    if (instance) {
      return this;
    }

    instance = this;
    this.container = container;
  }

  getInstance() {
    return this;
  }

  registerEvents() {
    this.on("fadeLayout", this.layoutFade);
  }

  layoutFade() {
    gsap.to(this.container, { opacity: 0, duration: 2 });
  }
}
