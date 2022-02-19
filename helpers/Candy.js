import * as PIXI from "pixi.js";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
import {ShockwaveFilter} from '@pixi/filter-shockwave';
import SimplexNoise from "simplex-noise";
import hsl from "hsl-to-hex";
import debounce from "debounce";
import { random, map } from "./math";
const colors = require("riso-colors");
import * as tome from 'chromotome';

export class Candy {
  constructor() {
    this.initializeApp();
    this.initializeColorPalette();
    this.orbs = [];
    this.createorbs();
    this.initializeAnimation();
    this.applyBlur();
  }

  initializeApp() {
    this.app = new PIXI.Application({
      view: document.querySelector(".orb-canvas"),
      resizeTo: window,
      transparent: true,
    });
  }

  initializeColorPalette() {
    this.colorPalette = new ColorPalette();
  }

  createorbs() {
    for (let i = 0; i < 10; i++) {
      const orb = new Orb(this.colorPalette.randomColor());
      this.app.stage.addChild(orb.graphics);
      this.orbs.push(orb);
    }
  }

  initializeAnimation() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.app.ticker.add(() => {
        // update and render each orb, each frame. app.ticker attempts to run at 60fps
        this.orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      // perform one update and render per orb, do not animate
      this.orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  }

  applyBlur() {
    this.app.stage.filters = [      
      new KawaseBlurFilter(70, 35, true),      
    ];
  }
}

// Orb class
class Orb {
  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = 0x000000) {
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 2;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    this.simplex = new SimplexNoise();
    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDist =
      window.innerWidth < 1000 ? window.innerWidth / 1 : window.innerWidth / 2;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight
        : window.innerHeight / 1.375;

    // allow each orb to move x distance away from it's { x, y }origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist / 200,
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist / 200,
      },
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = this.simplex.noise2D(this.xOff, this.xOff);
    const yNoise = this.simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = this.simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}

class ColorPalette {
  constructor() {
    this.setColors();
    this.setCustomProperties();    
  }

  setColors() {
    // pick a random hue somewhere between 220 and 360
    this.hue = ~~random(220, 360);
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    // define a fixed saturation and lightness
    this.saturation = 95;
    this.lightness = 50;

    // define a base color
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    // define a complimentary color, 30 degress away from the base
    this.complimentaryColor1 = hsl(
      this.complimentaryHue1,
      this.saturation,
      this.lightness
    );
    // define a second complimentary color, 60 degrees away from the base
    this.complimentaryColor2 = hsl(
      this.complimentaryHue2,
      this.saturation,
      this.lightness
    );

    // store the color choices in an array so that a random one can be picked later

    // 🔥 Add colors of choice here bitch
    // this.colorChoices = [
    //   '#58356e',
    //   '#f8955b',      
    // ];

    // this.colorChoices = [colors[Math.floor(Math.random() * colors.length)].hex]
    // this.colorChoices = colors.map(x => x.hex);
    this.colorChoices = tome.get('dt09').colors;
  }

  randomColor() {
    // pick a random color
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
      "#",
      "0x"
    );
  }

  setCustomProperties() {
    // set CSS custom properties so that the colors defined here can be used throughout the UI
    document.documentElement.style.setProperty("--hue", this.hue);
    document.documentElement.style.setProperty(
      "--hue-complimentary1",
      this.complimentaryHue1
    );
    document.documentElement.style.setProperty(
      "--hue-complimentary2",
      this.complimentaryHue2
    );
  }
}
