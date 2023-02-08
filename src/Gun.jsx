import { useGLTF, PivotControls } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

function Gun() {
  const gunModel = useGLTF("./Gun.glb");
  return (
    <RigidBody>
      <primitive
        object={gunModel.scene}
        scale={1.5}
        position={[157, 36.3, -5.5]}
      />
      <CuboidCollider
        args={[1, 1, 1]}
        position={[157, 36.3, -5.5]}
        sensor
        onIntersectionEnter={() => console.log("Keeped!")}
      />
    </RigidBody>
  );
}
export default Gun;
