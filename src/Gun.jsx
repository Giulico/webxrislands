import { addGun, dropGun } from "./store/playerSlice";

import { useGLTF, PivotControls, Sphere } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function Gun() {
  const gunModel = useGLTF("./Gun.glb");
  const dispatch = useDispatch();

  const player = useRef();
  const gunRef = useRef();
  const initialPosition = useRef([157, 36.3, -5.5]);

  const { scene, camera } = useThree();
  const { hasGun } = useSelector((state) => state.player);

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.name === "player") {
        player.current = obj;
      }
    });
  }, []);

  const shoot = useCallback(() => {
    console.log("shooting!");
  }, []);

  useEffect(() => {
    if (hasGun) {
      console.log("event listener added");
      window.document.addEventListener("click", shoot);
    }

    return () => {
      console.log("event listener removed");
      window.document.removeEventListener("click", shoot);
    };
  }, [hasGun]);

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
      g.y = p.y + 3;
      g.z = p.z;

      // const cameraRotation = camera.rotation;
      gunRef.current.rotation.x = camera.rotation.x;
      gunRef.current.rotation.y = camera.rotation.y;
      gunRef.current.rotation.z = camera.rotation.z;

      // const gunPosition = {
      //   x: p.x,
      //   y: p.y,
      //   z: p.z,
      // };
      // gunRef.current.position.set(...player.current.position);
    }
  });

  return (
    <>
      <RigidBody type="fixed">
        <Sphere
          args={[0.2, 4, 4]}
          position={initialPosition.current}
          material-color="red"
          visible={false}
        />
      </RigidBody>
      <RigidBody>
        <primitive
          ref={gunRef}
          name="gun"
          object={gunModel.scene}
          scale={1.5}
          position={initialPosition.current}
        />
        <CuboidCollider
          args={[2, 0.5, 2]}
          position={initialPosition.current}
          sensor
          onIntersectionEnter={onIntersectEnter}
          onIntersectionExit={onIntersectExit}
        />
      </RigidBody>
    </>
  );
}
export default Gun;
