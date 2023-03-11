import gsap from "gsap";

export interface Clickable extends HTMLElement {
  clicked: boolean;
}

export class Bouncible {
  nodeList: NodeListOf<Clickable>;

  constructor({ elements }) {
    if (elements) {
      this.nodeList = elements;
    }
  }

  expand(item: Clickable, i) {
    this.nodeList.forEach((it, ind) => {
      if (i === ind) return;
      it.clicked = false;
    });
    gsap.to(this.nodeList, {
      width: item.clicked ? "20%" : "15%",
      duration: 2,
      ease: "elastic(1, .6)",
    });
    item.clicked = !item.clicked;
    gsap.to(item, {
      width: item.clicked ? "40%" : "15%",
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
