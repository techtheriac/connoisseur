import gsap from "gsap";
import { lerp } from "@/helpers/Math";

export default class SmoothScroll {
  constructor({ scrollable, scrollContainer }) {
    this.scrollable = scrollable;
    this.scrollContainer = scrollContainer;

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
    };

    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
    this.onResizeEvent = this.onResize.bind(this);

    this.setDefaultLimit();
    this.addEventListeners();

    this.update();
  }

  setDefaultLimit() {
    this.scroll.limit = this.scrollable.clientHeight;

    console.log(this.scroll.limit);
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheelEvent);
    window.addEventListener("resize", this.onResizeEvent);
  }

  removeEventListeners() {
    window.removeEventListener("mousewheel", this.onMouseWheelEvent);
  }

  onResize(e) {
    this.scroll.limit = this.scrollable.clientHeight - window.innerHeight;
  }

  onMouseWheel(event) {
    const { deltaY } = event;
    this.scroll.target += deltaY;
  }

  update() {
    this.scroll.target = gsap.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = gsap.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.07
    );
    this.scrollable.style.transform = `translateY(${-this.scroll.current}px)`;

    window.requestAnimationFrame(this.update.bind(this));
  }
}
