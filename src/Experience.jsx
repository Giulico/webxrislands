// Actions
import { setOrbitControls } from "./store/debugSlice";

// Components
import { Suspense } from "react";
import {
  Sky,
  Sparkles,
  PointerLockControls,
  OrbitControls,
} from "@react-three/drei";
import { Controllers, Hands, useXR } from "@react-three/xr";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import Player from "./Player";
import ErrorBoundary from "./ErrorBoundary";
import Portal from "./Portal";
import Gun from "./Gun";

// Hooks
import { useControls } from "leva";
import { useGLTF } from "@react-three/drei";
import { useSelector, useDispatch } from "react-redux";

useGLTF.preload("/Islands.glb");

function Experience() {
  const { session } = useXR();
  const dispatch = useDispatch();
  const { orbitControls } = useSelector((state) => state.debug);

  const islandsModel = useGLTF("./Islands.glb");

  useControls({
    orbitControls: {
      value: false,
      onChange: (v) => {
        console.log("dispatch OrbitControls", v);
        dispatch(setOrbitControls(v));
      },
    },
  });
  const { showDebug } = useControls({
    showDebug: {
      value: false,
    },
  });

  const {
    sunPosition,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    azimuth,
  } = useControls(
    "Sky",
    {
      sunPosition: {
        value: [0, 0, 0],
        step: 0.1,
      },
      turbidity: {
        value: 10,
        step: 0.1,
      },
      rayleigh: {
        value: 45.5,
        step: 0.1,
      },
      mieCoefficient: {
        value: 0.005,
        step: 0.01,
      },
      mieDirectionalG: {
        value: 0.8,
        step: 0.01,
      },
      azimuth: {
        value: 0.25,
        step: 0.1,
      },
    },
    {
      collapsed: true,
    }
  );

  return (
    <>
      {orbitControls && <OrbitControls makeDefault />}

      {/* <Stars /> */}
      <Sky
        sunPosition={sunPosition}
        turbidity={turbidity}
        rayleigh={rayleigh}
        mieCoefficient={mieCoefficient}
        mieDirectionalG={mieDirectionalG}
        azimuth={azimuth}
      />

      <directionalLight
        castShadow
        position={[10, 10, 0]}
        intensity={0.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={25}
        shadow-camera-right={25}
        shadow-camera-bottom={-25}
        shadow-camera-left={-25}
        shadow-normalBias={0.4}
      />

      <ambientLight intensity={0.5} />

      <Controllers rayMaterial={{ color: "blue" }} />
      <Hands />

      <Suspense>
        <Physics>
          {showDebug && <Debug />}
          {/* <Grid /> */}
          <Player />
          <Sparkles count={100} scale={100} size={10} />

          <RigidBody colliders="trimesh" type="fixed">
            <primitive object={islandsModel.scene} />
          </RigidBody>

          <Portal
            position={[-30, -7, -11]}
            rotation-y={Math.PI / 2}
            scale={2.5}
          />

          <Gun />
        </Physics>

        {!session && !orbitControls && (
          <ErrorBoundary>
            <PointerLockControls />
          </ErrorBoundary>
        )}
      </Suspense>
    </>
  );
}
export default Experience;
