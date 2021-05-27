import * as THREE from "three";
import React, { useRef, Suspense, useEffect } from "react";
import toggleBackground from "../../helpers/toggleBackground";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import "../shaderMaterials/SquirlyMaterial";
import duotone from "../shaderMaterials/textures/duotone.png";
import { NavDang } from "../../helpers/Animations";
import { PerspectiveCamera } from "@react-three/drei";

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

const Scene = ({ meshGeometryDimension }) => {
  const viewport = useThree((state) => state.viewport);
  const { top, left, height, width } = meshGeometryDimension;

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <PerspectiveCamera
        makeDefault
        // position={[0, 0, 600]}
        // fov={2 * Math.atan(viewport.height / 2 / 600) * (180 / Math.PI)}
      >
        <SquirlyMesh
          meshGeometryDimension={meshGeometryDimension}
          position={[
            left -
              viewport.width / 2 +
              width / -top +
              viewport.height / 2 -
              height / 2,
            0,
          ]}
        />
      </PerspectiveCamera>
    </>
  );
};

function ScrollContainer({ scroll, children }) {
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
}

const ThreeWrapper = ({ children, meshGeometryDimension }) => {
  useEffect(() => {
    toggleBackground("var(--durag-blue)");
    new NavDang({
      el: document.querySelector("[class*='navItems']"),
      blur: true,
    });
  });

  return (
    <div>
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
        <Canvas
          raycaster={{
            computeOffsets: ({ clientX, clientY }) => ({
              offsetX: clientX,
              offsetY: clientY,
            }),
          }}
        >
          <Suspense fallback={null}>
            <Scene meshGeometryDimension={meshGeometryDimension} />
          </Suspense>
        </Canvas>
      </div>

      {children}
    </div>
  );
};

export default ThreeWrapper;
