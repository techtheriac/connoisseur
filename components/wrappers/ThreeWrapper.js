import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

export default class ThreeWrapper extends Component {
  componentDidMount() {
    this.initializeThree();
    this.addObject();
    this.renderScene();
    this.triggerResize();
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
  }

  addObject() {
    this.geometry = new THREE.PlaneBufferGeometry(200, 400, 10, 10);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.renderScene.bind(this));
  }

  resize(e) {
    this.height = this.container.offsetHeight;
    this.width = this.container.offsetWidth;
    console.log(e);
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
          backgroundColor: "var(--durag-blue)",
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
