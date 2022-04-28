export default class Sizing {
  constructor() {
    this.onResizeEvent = this.onResize.bind(this);

    this.onResize();
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResizeEvent);
  }

  onResize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
}
