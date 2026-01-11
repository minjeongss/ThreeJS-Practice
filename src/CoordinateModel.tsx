import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import ObstaclesModel from "./ObstaclesModel";

const CoordinateModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  //로봇 이동 로직
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();

      // 로봇(사각형) 이동 로직
      const moveZ = Math.sin(t * 0.5) * 10; // 천천히 왕복
      meshRef.current.position.z = moveZ;

      // 카메라 체이스 캠 (로봇을 추적)
      const cameraOffset = new THREE.Vector3(10, 10, 15);
      state.camera.position.x = meshRef.current.position.x + cameraOffset.x;
      state.camera.position.y = meshRef.current.position.y + cameraOffset.y;
      state.camera.position.z = meshRef.current.position.z + cameraOffset.z;
      state.camera.lookAt(meshRef.current.position);
    }
  });

  return (
    <>
      {/* 월드 좌표계 */}
      <primitive object={new THREE.AxesHelper(10)} />
      {/* 로봇(사각형) */}
      <mesh ref={meshRef} position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" transparent opacity={0.8} />

        {/* 로컬 좌표계: 사각형에 붙어서 함께 움직임 */}
        <primitive object={new THREE.AxesHelper(5)} />
      </mesh>
      <ObstaclesModel />
      <gridHelper args={[50, 50]} /> {/* 바닥 그리드 추가 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

export default CoordinateModel;
