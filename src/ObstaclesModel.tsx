import { useRef, useLayoutEffect, useEffect, useState } from "react";
import * as THREE from "three";
import type { Point } from "./Map.types";

const ObstaclesModel = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const tempObject = new THREE.Object3D();
  const [localPoints, setLocalPoints] = useState<Point[]>([]);

  useEffect(() => {
    const generatePoints = () => {
      const newPoints = Array.from({ length: 500 }).map(() => ({
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 2,
        z: (Math.random() - 0.5) * 15,
      }));
      setLocalPoints(newPoints);
    };

    generatePoints(); // 초기 데이터 생성
    const interval = setInterval(generatePoints, 1000); // 1초마다 갱신

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    // 각 인스턴스(점)의 위치를 데이터에 맞게 설정
    localPoints.forEach((point, i) => {
      tempObject.position.set(point.x, point.y, point.z);
      tempObject.updateMatrix();
      meshRef.current!.setMatrixAt(i, tempObject.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [localPoints]);

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, localPoints.length]}
    >
      <sphereGeometry args={[0.05]} /> {/* 작은 점으로 표현 */}
      <meshBasicMaterial color="lime" />
    </instancedMesh>
  );
};

export default ObstaclesModel;
