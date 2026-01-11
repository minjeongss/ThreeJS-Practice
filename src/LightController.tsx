const LightController = () => {
  return (
    <>
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <ambientLight intensity={0.4} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
    </>
  );
};

export default LightController;

/**
 * directionalLight: 태양광이며, 그림자 shadow로 지정
 * ambientLight: 모든 개체에게 전체적 빛 제공, 빛의 방향이 없어 그림자 없음
 * pointLight: 동그란 광원 존재
 */
