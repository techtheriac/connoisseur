export default class TextSrcamble {
  nodeList: NodeListOf<Element>;

  constructor({ elements }) {
    if (elements) {
      this.nodeList = elements;
    }
  }

  shuffle(input: string) {
    var a = typeof input == "string" ? input.split("") : input,
      n = a.length;

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

      const originalText: string = node.textContent;

      node.addEventListener("mouseover", (event) => {
        if (!event) return;

        let iterations: number = 0;

        const interval = setInterval(() => {
          if (!node.textContent) return;
          node.textContent = this.shuffle(node.textContent);

          if (iterations >= originalText.length) {
            clearInterval(interval);
            node.textContent = originalText;
          }
          iterations += 1;
        }, 50);
      });
    });
  }
}
