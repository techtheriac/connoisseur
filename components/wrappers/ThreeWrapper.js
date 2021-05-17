import React, { Component } from "react";
import * as THREE from "three";
import { PlaneBufferGeometry } from "three";
import gsap from "gsap";
import OrbitControls from "three-orbitcontrols";
import fragment from "../shaders/fragment.glsl";
import vertex from "../shaders/vertex.glsl";
export default class ThreeWrapper extends Component {
  componentDidMount() {
    this.initializeThree();
    this.addImages();
    this.setPosition();
    this.resize();
    this.triggerResize();
    this.renderScene();

    window.addEventListener("scroll", () => {
      this.currentScroll = window.scrollY;
    });
  }

  initializeThree() {
    this.container = this.mount;
    this.height = this.container.offsetHeight;
    this.width = this.container.offsetWidth;
    this.time = 0;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      70,
      this.width / this.height,
      100,
      2000
    );
    this.camera.position.z = 600;
    this.camera.fov = 2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.images = [...document.querySelectorAll("img")];

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.currentScroll = 0;
  }

  addImages() {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        uImage: {},
        hover: { value: new THREE.Vector2(0.5, 0.5) },
        hoverState: { value: 0 },
      },
      fragmentShader: fragment,
      vertexShader: vertex,
    });

    this.materials = [];

    this.imageStore = this.images.map((image) => {
      let { top, left, width, height } = image.getBoundingClientRect();
      let geometry = new PlaneBufferGeometry(width, height, 10, 10);
      let texture = new THREE.Texture(image);
      texture.needsUpdate = true;

      let material = this.material.clone();
      this.materials.push(material);
      material.uniforms.uImage.value = texture;

      image.addEventListener("mouseenter", () => {
        gsap.to(material.uniforms.hoverState, {
          duration: 1,
          value: 1,
        });
      });

      image.addEventListener("mouseout", () => {
        gsap.to(material.uniforms.hoverState, {
          duration: 1,
          value: 0,
        });
      });

      let mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);

      return {
        image,
        mesh,
        top,
        left,
        width,
        height,
      };
    });
  }

  setPosition() {
    this.imageStore.forEach((o) => {
      o.mesh.position.y =
        this.currentScroll - o.top + this.height / 2 - o.height / 2;
      o.mesh.position.x = o.left - this.width / 2 + o.width / 2;
    });
  }

  renderScene() {
    this.time += 0.25;

    this.setPosition();
    this.materials.forEach((m) => {
      m.uniforms.time.value = this.time;
    });

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.renderScene.bind(this));
  }

  resize(e) {
    this.height = this.container.offsetHeight;
    this.width = this.container.offsetWidth;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  triggerResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {this.props.children}
        <div
          id="canvas-container"
          ref={(mount) => {
            this.mount = mount;
          }}
          style={{
            top: 0,
            left: 0,
            zIndex: -12,
            width: "100vw",
            height: "100vh",
            position: "fixed",
          }}
        ></div>
      </div>
    );
  }
}
