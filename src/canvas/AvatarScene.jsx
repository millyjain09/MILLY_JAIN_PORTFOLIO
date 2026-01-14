
import { Canvas } from "@react-three/fiber";
import Avatar from "./Avatar";

export default function AvatarScene() {
  return (
    // className="pointer-events-none" -> IMPORTANT: Ye ensure karega ki 3D Canvas clicks na roke
    <Canvas 
      className="pointer-events-none"
      camera={{ position: [0, 0.4, 2.0], fov: 45 }}
    >
      
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={1.5} />
      
      {/* Avatar Position */}
      <group position={[0, -1.2, 0]}>
        <Avatar />
      </group>
      
    </Canvas>
  );
}
