import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SquareModel = () => {
  const meshRef = useRef<THREE.Mesh | null>(null);

  //회전하는 속성
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.5;
      meshRef.current.rotation.y = 0.5;
    }
  }, []);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      //   meshRef.current.position.z += 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 5, 0]} castShadow>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="orange" />
    </mesh>
  );
};

export default SquareModel;

//https://talkwithcode.tistory.com/82
