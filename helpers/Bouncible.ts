import gsap from "gsap";

export class Clickable extends HTMLDivElement {
  public clicked: boolean;
  constructor() {
    super();
  }
}
customElements.define("clickable-div", Clickable, { extends: "div" });

export class Bouncible {
  nodeList: NodeListOf<Clickable>;

  constructor({ elements }) {
    if (elements) {
      this.nodeList = elements;
    }
  }

  expand(item, i) {
    this.nodeList.forEach((it, ind) => {
      if (i === ind) return;
      it.clicked = false;
    });
    gsap.to(this.nodeList, {
      width: item.clicked ? "15vw" : "8vw",
      duration: 2,
      ease: "elastic(1, .6)",
    });
    item.clicked = !item.clicked;
    gsap.to(item, {
      width: item.clicked ? "42vw" : "15vw",
      duration: 2.5,
      ease: "elastic(1, .3)",
    });
  }

  animate() {
    this.nodeList.forEach((item, i) => {
      item.clicked = false;
      item.addEventListener("click", () => this.expand(item, i));
    });
  }
}
