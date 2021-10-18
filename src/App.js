import { OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import InstanceSpheres from "./component/InstanceSpheres";
import useStore from "./component/Store";

import "./styles.css";

export default function App() {
  const { target, setTarget } = useStore();

  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas
        shadows
        linear
        dpr={[1, 2]}
        camera={{ position: [0, 8, 8] }}
        onPointerMissed={() => setTarget(null)}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["black"]} />
          <ambientLight />
          <InstanceSpheres />
          {target && <TransformControls object={target} />}
        </Suspense>
      </Canvas>
    </Suspense>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
