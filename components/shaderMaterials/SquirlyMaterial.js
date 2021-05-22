import * as THREE from "three";
import { extend } from "@react-three/fiber";
import gsap from "gsap";
import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";

export class SquirlyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        uImage: { value: undefined },
        hover: { value: new THREE.Vector2(0.5, 0.5) },
        hoverState: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
  }

  get uImage() {
    return this.uniforms.uImage.value;
  }
  set uImage(v) {
    return (this.uniforms.uImage.value = v);
  }
}

extend({ SquirlyMaterial });
