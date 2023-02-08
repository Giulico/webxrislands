import { addGun, dropGun } from "./store/playerSlice";

import { useGLTF, PivotControls } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Gun() {
  const gunModel = useGLTF("./Gun.glb");
  const dispatch = useDispatch();

  const player = useRef();
  const gunRef = useRef();
  const initialPosition = useRef([157, 36.3, -5.5]);

  const { scene } = useThree();
  const { hasGun } = useSelector((state) => state.player);

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.name === "player") {
        player.current = obj;
      }
    });
  }, []);

  const onIntersectEnter = ({ rigidBodyObject }) => {
    if (rigidBodyObject && rigidBodyObject.name === "player") {
      dispatch(addGun());
    }
  };

  const onIntersectExit = ({ rigidBodyObject }) => {
    if (rigidBodyObject && rigidBodyObject.name === "player") {
      dispatch(dropGun());
      gunRef.current.position.x = initialPosition.current[0];
      gunRef.current.position.y = initialPosition.current[1];
      gunRef.current.position.z = initialPosition.current[2];
    }
  };

  useFrame(() => {
    if (hasGun) {
      const p = player.current.position;
      const g = gunRef.current.position;
      g.x = p.x + -0.5;
      g.y = p.y + 1.5;
      g.z = p.z;
      // const gunPosition = {
      //   x: p.x,
      //   y: p.y,
      //   z: p.z,
      // };
      // gunRef.current.position.set(...player.current.position);
    }
  });

  return (
    <RigidBody>
      <primitive
        ref={gunRef}
        name="gun"
        object={gunModel.scene}
        scale={1.5}
        position={initialPosition.current}
      />
      <CuboidCollider
        args={[1, 1, 1]}
        position={initialPosition.current}
        sensor
        onIntersectionEnter={onIntersectEnter}
        onIntersectionExit={onIntersectExit}
      />
    </RigidBody>
  );
}
export default Gun;
