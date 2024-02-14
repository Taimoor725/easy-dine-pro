import { Environment, OrbitControls, PresentationControls, Sphere, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Earth = () => {
  return (
    <div className="w-full h-full rounded-xl p-2">
      <Canvas className="rounded-xl">
        <Environment preset="dawn" />
        <Model />
      </Canvas>
    </div>
  );
};
const Model = () => {
  const map = useTexture("/8081_earthmap2k.jpg");
  const dispMap = useTexture("/8081_earthbump2k.jpg");
  const ref = useRef();
  useFrame(() => {
    if(ref.current){
      ref.current.rotation.y += 0.003;
      ref.current.rotation.z += 0.003;
      ref.current.rotation.x += 0.001;
    }
  })
  return (
    <mesh scale={5} position={[-1, -3, 0]}  ref={ref}>
      <sphereGeometry  args={[1, 128, 128]}/>
      <meshStandardMaterial displacementMap={dispMap} map={map} displacementScale={0.2}  />
    </mesh>
  );
};

export default Earth;
