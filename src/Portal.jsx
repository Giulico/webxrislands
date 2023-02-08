import * as THREE from "three";
import portalVertex from "./shaders/portal/vertex.glsl";
import portalFragment from "./shaders/portal/fragment.glsl";

// Action
import { set } from "./store/playerSlice";

// Components
import { Plane, useGLTF, shaderMaterial } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

// Hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useFrame, extend } from "@react-three/fiber";
import { useControls } from "leva";

useGLTF.preload("./Portal.glb");

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#00c2db"),
    uColorEnd: new THREE.Color("#47db72"),
  },
  portalVertex,
  portalFragment
);

extend({ PortalMaterial });

export default function Portal(props) {
  const dispatch = useDispatch();
  const portal = useGLTF("./Portal.glb");

  const portalMaterial = useRef();

  useControls("Portal", {
    colorStart: {
      value: "#00c2db",
      onChange: (v) => {
        portalMaterial.current.uColorStart = new THREE.Color(v);
      },
    },
    colorEnd: {
      value: "#47db72",
      onChange: (v) => {
        portalMaterial.current.uColorEnd = new THREE.Color(v);
      },
    },
  });

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <>
      <Plane
        args={[5, 9, 2]}
        position={[-30.2, -0.2, -22.3]}
        rotation-y={Math.PI / 2}
      >
        <portalMaterial ref={portalMaterial} />
      </Plane>
      <RigidBody colliders="trimesh" type="fixed">
        <primitive object={portal.scene} {...props} />
        <CuboidCollider
          args={[0.2, 3, 3]}
          position={[-30.5, 1, -22]}
          sensor
          onIntersectionEnter={() => dispatch(set({ x: 200, y: 40, z: 0 }))}
        />
      </RigidBody>
    </>
  );
}
