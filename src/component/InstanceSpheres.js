import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { useCursor } from "@react-three/drei";

import useStore from "./Store";

function InstanceSpheres() {
  const ref = useRef();
  const size = 2;
  const setTarget = useStore((state) => state.setTarget);

  const [hovered, setHover] = useState(false);

  useCursor(hovered);

  useLayoutEffect(() => {
    const tempObject = new THREE.Object3D();

    tempObject.position.set(-1.2, 0, 0);
    tempObject.scale.set(0.5, 0.5, 0.5);
    tempObject.updateMatrix();
    ref.current.setMatrixAt(0, tempObject.matrix);

    tempObject.position.set(1.2, 0, 0);
    tempObject.scale.set(0.5, 0.5, 0.5);
    tempObject.updateMatrix();
    ref.current.setMatrixAt(1, tempObject.matrix);
  }, []);

  return (
    <instancedMesh
      ref={ref}
      args={[null, null, size]}
      onClick={(e) => setTarget(e.object)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "green"} />
    </instancedMesh>
  );
}

export default InstanceSpheres;
