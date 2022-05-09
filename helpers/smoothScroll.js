import gsap from "gsap";
import { lerp } from "@/helpers/Math";
import normalizeWheel from "normalize-wheel";

export default class SmoothScroll {
  constructor({ scrollable, scrollContainer }) {
    this.scrollable = scrollable;
    this.scrollContainer = scrollContainer;

    this.scroll = {
      ease: 0.1,
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
      position: 0,
    };

    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
    this.onResizeEvent = this.onResize.bind(this);

    this.onTouchDownEvent = this.onTouchDown.bind(this);
    this.onTouchMoveEvent = this.onTouchMove.bind(this);
    this.onTouchUpEvent = this.onTouchUp.bind(this);

    this.setDefaultLimit();
    this.addEventListeners();

    this.update();
  }

  setDefaultLimit() {
    this.scroll.limit = this.scrollable.scrollHeight - window.innerHeight;

    console.log(
      "scroll diff",
      this.scrollable.scrollHeight - window.innerHeight
    );
  }

  get calculateScrollLimit() {
    return this.scrollable.scrollHeight > window.innerHeight
      ? this.scrollable.scrollHeight - window.innerHeight
      : 0;
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheelEvent);
    window.addEventListener("resize", this.onResizeEvent);
    window.addEventListener("touchstart", this.onTouchDownEvent);
    window.addEventListener("touchmove", this.onTouchMoveEvent);
    window.addEventListener("touchend", this.onTouchUpEvent);
  }

  removeEventListeners() {
    window.removeEventListener("mousewheel", this.onMouseWheelEvent);
  }

  onResize(e) {
    this.scroll.limit = this.scrollable.scrollHeight - window.innerHeight;
  }

  onMouseWheel(event) {
    const { pixelY } = normalizeWheel(event);
    const { deltaY } = event;
    this.scroll.target += deltaY;
  }

  onTouchDown(event) {
    this.isDown = true;

    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientX : event.clientX;
  }

  onTouchMove(event) {
    if (!this.isDown) return;

    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const distance = (this.start - x) * 0.01;

    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp(event) {
    this.isDown = false;
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
      this.scroll.ease
    );

    this.scrollable.style.transform = `translate3d(0, ${-this.scroll
      .current}px, 0)`;

    window.requestAnimationFrame(this.update.bind(this));
  }
}
