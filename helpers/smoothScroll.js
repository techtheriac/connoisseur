export default class SmoothScroll {
  constructor(options) {
    this.current = 0;
    this.target = 0;
    this.ease = 0.005;

    this.scrollable = options.el;
    this.initialiaze();
    this.render();
  }

  initialiaze() {
    document.body.style.height = `${
      this.scrollable.getBoundingClientRect().height
    }px`;
  }

  lerp(start, end, time) {
    return start * (1 - time) + end * time;
  }

  smoothScroll() {
    this.target = window.scrollY;
    this.current = this.lerp(this.current, this.target, this.ease);
    this.scrollable.style.transform = `translate3d(0, ${-this.current}px, 0)`;
  }

  render() {
    this.smoothScroll();
    window.requestAnimationFrame(this.render.bind(this));
  }
}
