import * as THREE from "three";
import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "../shaderMaterials/SquirlyMaterial";
import duotone from "../shaderMaterials/textures/duotone.png";

const Scene = ({ meshGeometryDimension }) => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <SquirlyMesh meshGeometryDimension={meshGeometryDimension} />
    </>
  );
};

const SquirlyMesh = ({ meshGeometryDimension }) => {
  const { width, height } = meshGeometryDimension;
  const ref = useRef();
  const [texture] = useLoader(THREE.TextureLoader, [duotone]);

  return (
    <>
      <mesh
        onPointerEnter={(e) => console.log(e)}
        onPointerLeave={(e) => console.log(e)}
        onClick={(e) => console.log(e)}
      >
        <planeBufferGeometry args={[width / 100, height / 100]} />
        <squirlyMaterial ref={ref} uImage={texture} />
      </mesh>
    </>
  );
};

const ThreeWrapper = ({ children, meshGeometryDimension }) => {
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
            <Scene meshGeometryDimension={meshGeometryDimension} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeWrapper;
