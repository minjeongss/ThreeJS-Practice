import { Canvas } from "@react-three/fiber";
import CoordinateModel from "./CoordinateModel";

const CoordinateTemplate = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <CoordinateModel />
    </Canvas>
  );
};

export default CoordinateTemplate;
