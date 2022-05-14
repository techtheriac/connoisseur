import EventEmitter from "events";
import gsap from "gsap";
import router from "next/router";
let instance;

export default class Animations extends EventEmitter {
  constructor(container) {
    super();
    this.container = container;

    if (instance) {
      instance = this;
    }
  }

  getInstance() {
    return this;
  }

  registerEvents() {
    if (this.container) {
      this.on("fadeLayout", this.layoutFade);

      this.on("fadePageTransition", (route) => {
        this.pageFadeTimeline = gsap.timeline({
          onComplete: () => router.push(route),
        });
        this.pageFadeTimeline.to(this.container, { opacity: 0, duration: 0.5 });
      });
    }
  }

  layoutFade() {
    gsap.to(this.container, { opacity: 0, duration: 2 });
  }

  fadePageTransition(handleTransition) {
    this.layoutFade();
    handleTransition();
  }
}
