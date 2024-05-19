import { useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import Earth from "../../../public/earth/Earth";
import CanvasLoader from "../Loader";

const EarthCanvas = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={5} />
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
        <Preload all />
      </Canvas>
    </>
  );
};

export default EarthCanvas;
