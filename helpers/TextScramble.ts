import gsap from "gsap";
export default class TextSrcamble {
  nodeList: NodeListOf<Element>;

  constructor({ elements }) {
    if (elements) {
      this.nodeList = elements;
    }
  }

  shuffle(input: NodeListOf<HTMLElement>) {
    var a = gsap.utils.toArray(input);
    var n = input.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }

  animate(): void {
    this.nodeList.forEach((node) => {
      if (!node.textContent) return;

      const originalContent = gsap.utils
        .toArray(node.querySelectorAll("span"))
        .join("");

      node.addEventListener("mouseover", (event) => {
        if (!event) return;

        let iterations: number = 0;

        const interval = setInterval(() => {
          if (!node) return;
          node.innerHTML = this.shuffle(node.querySelectorAll("span"));

          console.log(node.innerHTML);

          if (iterations >= originalContent.length) {
            clearInterval(interval);
            node.innerHTML = originalContent;
          }
          iterations += 1;
        }, 45);
      });
    });
  }
}
