import * as PIXI from "pixi.js";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
import SimplexNoise from "simplex-noise";
import hsl from "hsl-to-hex";
import debounce from "debounce";
import { random, map } from "./Math";
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
      new KawaseBlurFilter(70, 20, true),
      this.createCustomFilter      
    ];
  }

  get createCustomFilter() {
    const fragmentShader = `    
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      void main(void)
      {
       float noise = (fract(sin(dot(vTextureCoord, vec2(12.9898,78.233)*2.0)) * 43758.5453));
        vec4 col = texture2D(uSampler, vTextureCoord) - noise / 8.0;
        gl_FragColor = col;
        // gl_FragColor = texture2D(uSampler, vTextureCoord);
      }    
    `;
    
    const vertexShader = `
      attribute vec2 aVertexPosition;

      uniform mat3 projectionMatrix;
      
      varying vec2 vTextureCoord;
      
      uniform vec4 inputSize;
      uniform vec4 outputFrame;
      
      vec4 filterVertexPosition( void )
      {
          vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
      
          return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
      }
      
      vec2 filterTextureCoord( void )
      {
          return aVertexPosition * (outputFrame.zw * inputSize.zw);
      }
      
      void main(void)
      {
          gl_Position = filterVertexPosition();
          vTextureCoord = filterTextureCoord();
      }
    `;

    const myUniforms = { myUniform: 0.5, };
    return new PIXI.Filter(null, fragmentShader)
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
      window.innerWidth < 1000 ? window.innerWidth / 2 : window.innerWidth / 2;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight / 2
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
  }

  setColors() {    
    this.colorChoices = tome.get('dt09').colors;    
  }

  randomColor() {
    // pick a random color
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
      "#",
      "0x"
    );
  }
}
