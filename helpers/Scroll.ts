import { TweenMax } from "gsap";
export default class Scroll {
  scroll: {
    position: number;
    current: number;
    target: number;
  };

  container: HTMLElement;
  onScrollTouchStartEvent: EventListenerOrEventListenerObject;
  onScrollMouseWheelEvent: EventListenerOrEventListenerObject;
  onScrollTouchMoveEvent: EventListenerOrEventListenerObject;
  onScrollTouchEndEvent: EventListenerOrEventListenerObject;
  onScrollUpdateEvent: number;

  isDown: boolean;
  start: number;

  constructor({ container }) {
    this.container = container;
    this.scroll = {
      position: 0,
      current: 0,
      target: 0,
    };

    this.onScrollMouseWheelEvent = this.onScrollMouseWheel.bind(this);
    this.onScrollTouchStartEvent = this.onScrollTouchStart.bind(this);
    this.onScrollTouchMoveEvent = this.onScrollTouchMove.bind(this);
    this.onScrollTouchEndEvent = this.onScrollTouchEnd.bind(this);

    this.onScrollUpdate();

    this.addEventListeners();
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

  onScrollMouseWheel(event) {
    let delta = -event.wheelDeltaY || event.deltaY;
    let speed = 20;

    if (delta < 0) speed *= -1;

    const total = this.container.clientHeight - window.innerHeight;

    this.scroll.target += speed;
    this.scroll.target = this.clamp(this.scroll.target, 0, total);
  }

  onScrollTouchStart(event) {
    this.isDown = true;

    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }

  onScrollTouchMove(event) {
    if (!this.isDown) return;

    const total = this.container.clientHeight - window.innerHeight;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    const distance = (this.start - y) * 2;

    this.scroll.target = this.scroll.position + distance;
    this.scroll.target = this.clamp(this.scroll.target, 0, total);
  }

  onScrollTouchEnd(event) {
    this.isDown = false;
  }

  onScrollUpdate() {
    this.scroll.current += (this.scroll.target - this.scroll.current) * 0.1;

    TweenMax.set(this.container, {
      y: -this.scroll.current,
    });

    this.onScrollUpdateEvent = window.requestAnimationFrame(
      this.onScrollUpdate.bind(this)
    );
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onScrollMouseWheelEvent);
    window.addEventListener("touchstart", this.onScrollTouchStartEvent);
    window.addEventListener("touchmove", this.onScrollTouchMoveEvent);
    window.addEventListener("touchend", this.onScrollTouchEndEvent);
    window.addEventListener("mousedown", this.onScrollTouchStartEvent);
    window.addEventListener("mousemove", this.onScrollTouchMoveEvent);
    window.addEventListener("mouseup", this.onScrollTouchEndEvent);
  }
}
