import * as THREE from "three";
import React, { useRef, Suspense, useEffect } from "react";
import toggleBackground from "../../helpers/toggleBackground";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import "../shaderMaterials/SquirlyMaterial";
import duotone from "../shaderMaterials/textures/duotone.png";
import { NavDang } from "../../helpers/Animations";

const Scene = ({ meshGeometryDimension }) => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <SquirlyMesh meshGeometryDimension={meshGeometryDimension} />
    </>
  );
};

const ScrollContainer = ({ scroll, children }) => {
  const { viewport } = useThree();
  const group = useRef();
  const vec = new THREE.Vector3();
  useFrame(() =>
    group.current.position.lerp(
      vec.set(0, viewport.height * scroll.current, 0),
      0.1
    )
  );

  return <group ref={group}>{children}</group>;
};

const SquirlyMesh = ({ meshGeometryDimension }) => {
  const { width, height, top, left } = meshGeometryDimension;
  const ref = useRef();
  const [texture] = useLoader(THREE.TextureLoader, [duotone]);

  return (
    <>
      <mesh
        onPointerEnter={(e) => console.log(e)}
        onPointerLeave={(e) => console.log(e)}
        onClick={(e) => console.log(e)}
      >
        <planeBufferGeometry args={[width, height]} />
        <squirlyMaterial ref={ref} uImage={texture} />
      </mesh>
    </>
  );
};

const ThreeWrapper = ({ children, meshGeometryDimension }) => {
  useEffect(() => {
    toggleBackground("var(--durag-blue)");
    new NavDang({
      el: document.querySelector("[class*='navItems']"),
      blur: true,
    });
  });
  return (
    <div data-scroll-container>
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
        <Canvas camera={{ position: [0, 0, 600] }}>
          <Suspense fallback={null}>
            <Scene meshGeometryDimension={meshGeometryDimension} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeWrapper;
