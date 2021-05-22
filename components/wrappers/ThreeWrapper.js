import * as THREE from "three";
import React, { Children, Component, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "../shaderMaterials/SquirlyMaterial";
import duotone from "../shaderMaterials/textures/duotone.png";

const SquirlyMesh = () => {
  const ref = useRef();
  const [texture] = useLoader(THREE.TextureLoader, [duotone]);

  return (
    <>
      <mesh
        onPointerEnter={(e) => console.log(e)}
        onPointerLeave={(e) => console.log(e)}
        onClick={(e) => console.log(e)}
      >
        <planeGeometry />
        <squirlyMaterial ref={ref} uImage={texture} />
      </mesh>
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <SquirlyMesh />
    </>
  );
};

const ThreeWrapper = ({ children }) => {
  return (
    <div>
      {children}
      <div
        id="canvas-container"
        style={{
          top: 0,
          left: 0,
          zIndex: -12,
          width: "100%",
          height: "100vh",
          position: "fixed",
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeWrapper;
