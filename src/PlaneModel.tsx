const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.3} />
    </mesh>
  );
};

export default Plane;
