import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { DirectionalLight } from "three";
import { useRef } from "react";
function RotatingCube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });
  return (
    <>
      <mesh ref={meshRef}>
        <dodecahedronGeometry />
        <meshLambertMaterial color="#4B0082" emissive="#4B0082" />
      </mesh>
    </>
  );
}
function App() {
  return (
    <>
      {/* <h2>React Three fibre</h2> */}
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <OrbitControls enableZoom enablePan enableRotate />

        <spotLight position={[1, 1, 1]} intensity={10} color="#ffffff" />

        <color attach="background" args={["#F0F0F0"]} />

        <RotatingCube />
      </Canvas>
    </>
  );
}

export default App;
