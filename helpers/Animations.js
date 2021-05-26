import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export class NavDang {
  constructor({ el }) {
    gsap.registerPlugin(ScrollTrigger);
    this.el = el;
    this.navItems = gsap.utils.toArray(this.el.querySelectorAll("li"));
    this.navItemsReversed = gsap.utils
      .toArray(this.el.querySelectorAll("li"))
      .reverse();

    this.initScrollTrigger();
  }

  initScrollTrigger() {
    ScrollTrigger.create({
      start: 85,
      end: "bottom bottom-=20",
      toggleClass: {
        targets: "body",
        className: "has-scrolled",
      },
      onEnter: ({ direction }) => this.navAnimation(direction),
      onLeaveBack: ({ direction }) => this.navAnimation(direction),
    });
  }

  navAnimation(direction) {
    const scrollingDown = direction === 1;
    const links = scrollingDown ? this.navItems : this.navItemsReversed;

    return gsap.to(links, {
      duration: 0.3,
      stagger: 0.05,

      //toggles visibility
      autoAlpha: () => (scrollingDown ? 0 : 1),
      y: () => (scrollingDown ? 20 : 0),
      ease: "Power4.out",
    });
  }
}
