import { Canvas } from "@react-three/fiber";
import SquareModel from "./SquareModel";
import LightController from "./LightController";
import PlaneModel from "./PlaneModel";
import { OrbitControls } from "@react-three/drei";

const SquareTemplate = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 40], fov: 40 }}>
      <SquareModel />
      <LightController />
      <PlaneModel />
      <OrbitControls />
    </Canvas>
  );
};

export default SquareTemplate;
