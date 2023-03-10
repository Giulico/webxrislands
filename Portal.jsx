/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Portal.glb --output src/Portal.jsx --keepnames --keepgroups --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Portal(props) {
  const { nodes, materials } = useGLTF("/Portal-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Fläche022"
          geometry={nodes.Fläche022.geometry}
          material={nodes.Fläche022.material}
          position={[84.09, 0.25, 29.09]}
          scale={4}
        />
        <mesh
          name="Fläche"
          geometry={nodes.Fläche.geometry}
          material={materials.Stone}
          position={[4.51, 1.99, 0.15]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Fläche001"
          geometry={nodes.Fläche001.geometry}
          material={materials.Stone}
          position={[4.51, 1.99, 0.15]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Fläche002"
          geometry={nodes.Fläche002.geometry}
          material={materials.Stone}
          position={[4.4, 0.49, -0.05]}
          scale={[1.96, 1, 1]}
        />
        <mesh
          name="Fläche004"
          geometry={nodes.Fläche004.geometry}
          material={materials.Stone}
          position={[4.4, 0.49, -0.05]}
          scale={[2.75, 1, 1.7]}
        />
        <mesh
          name="Fläche005"
          geometry={nodes.Fläche005.geometry}
          material={materials.Stone}
          position={[5.96, 0.99, 0.66]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche007"
          geometry={nodes.Fläche007.geometry}
          material={materials.Stone}
          position={[3.77, 0.99, 0.07]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche008"
          geometry={nodes.Fläche008.geometry}
          material={materials.Stone}
          position={[4.6, 1.01, 0.07]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche009"
          geometry={nodes.Fläche009.geometry}
          material={materials.Stone}
          position={[5.42, 1.03, 0.21]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche006"
          geometry={nodes.Fläche006.geometry}
          material={materials.Stone}
          position={[2.76, 0.51, 1.07]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche011"
          geometry={nodes.Fläche011.geometry}
          material={materials.Stone}
          position={[6.3, 0.49, 1.19]}
          rotation={[0, 0.36, 0]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche012"
          geometry={nodes.Fläche012.geometry}
          material={materials.Stone}
          position={[4.82, 0.49, 1.22]}
          rotation={[0, -0.27, 0]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche013"
          geometry={nodes.Fläche013.geometry}
          material={materials.Stone}
          position={[3.62, 0.5, 0.88]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche010"
          geometry={nodes.Fläche010.geometry}
          material={materials.Stone}
          position={[7.54, 0.27, -0.01]}
          rotation={[0.18, -0.2, -0.45]}
          scale={[0.55, 0.3, 0.35]}
        />
        <mesh
          name="Fläche014"
          geometry={nodes.Fläche014.geometry}
          material={materials.Stone}
          position={[6.64, 0.51, 0.03]}
          rotation={[0, 0.36, 0]}
          scale={[0.32, 0.17, 0.22]}
        />
        <mesh
          name="Fläche015"
          geometry={nodes.Fläche015.geometry}
          material={materials.Stone}
          position={[6.64, 0.51, 0.03]}
          rotation={[0, 0.36, 0]}
          scale={[0.32, 0.17, 0.22]}
        />
        <mesh
          name="Fläche016"
          geometry={nodes.Fläche016.geometry}
          material={materials.Stone}
          position={[6.64, 0.54, -0.35]}
          rotation={[-0.3, 1.38, 0]}
          scale={[0.32, 0.17, 0.22]}
        />
        <mesh
          name="Fläche017"
          geometry={nodes.Fläche017.geometry}
          material={materials.Stone}
          position={[5.78, 0.02, 2.34]}
          rotation={[0, 0.69, 0]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche018"
          geometry={nodes.Fläche018.geometry}
          material={materials.Stone}
          position={[5.17, 0.07, 2.29]}
          rotation={[-0.11, 0.04, 0.13]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche019"
          geometry={nodes.Fläche019.geometry}
          material={materials.Stone}
          position={[2.15, 0.02, 1.78]}
          rotation={[0, -0.5, 0]}
          scale={[0.41, 0.22, 0.29]}
        />
        <mesh
          name="Fläche020"
          geometry={nodes.Fläche020.geometry}
          material={materials.Stone}
          position={[2.68, 0.99, 0.05]}
          rotation={[0, -1.32, 0]}
          scale={[0.32, 0.17, 0.22]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Portal-transformed.glb");
