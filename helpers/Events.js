import EventEmitter from "events";
import gsap from "gsap";
import router from "next/router";
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
    this.on("fadePageTransition", (route) => {
      this.timeline = gsap.timeline({ onComplete: () => router.push(route) });
      this.timeline.to(this.container, { opacity: 0, duration: 2 });
      console.log(route);
    });
  }

  layoutFade() {
    gsap.to(this.container, { opacity: 0, duration: 2 });
  }

  fadePageTransition(handleTransition) {
    this.layoutFade();
    handleTransition();
  }
}
