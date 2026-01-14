import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Avatar() {
  const group = useRef();
  
  // Model Load
  const avatar = useGLTF("/models/avatar.glb");
  const { animations } = useGLTF("/models/Animation.glb");
  const { actions } = useAnimations(animations, group);

  // Audio Setup
  const [audio] = useState(new Audio("/welcome.mp3")); 
  const [isTalking, setIsTalking] = useState(false);

  // --- DEBUGGING: Console me naam check karne ke liye ---
  useEffect(() => {
    console.log("--- CHECKING MORPH TARGETS ---");
    avatar.scene.traverse((child) => {
      if (child.isMesh && child.morphTargetDictionary) {
        console.log(`Mesh: ${child.name}`);
        console.log("Targets:", Object.keys(child.morphTargetDictionary));
      }
    });
    console.log("------------------------------");
  }, [avatar.scene]);

  // --- ANIMATION PLAY ---
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // --- LIP SYNC LOGIC (SMART FINDER) ---
  useFrame((state) => {
    if (isTalking) {
      avatar.scene.traverse((child) => {
        if (child.isMesh && child.morphTargetDictionary) {
          
          // 1. Khud dhoondho ki "open" ya "viseme" wala target kaunsa hai
          // Hum dictionary ki saari keys check karenge
          const targetName = Object.keys(child.morphTargetDictionary).find(key => 
            key.includes("viseme_aa") || 
            key.includes("jawOpen") || 
            key.includes("mouthOpen") || 
            key.toLowerCase().includes("open") // Koi bhi naam jisme "open" ho
          );

          if (targetName) {
            const index = child.morphTargetDictionary[targetName];
            
            // Muh hilaana
            child.morphTargetInfluences[index] = THREE.MathUtils.lerp(
              child.morphTargetInfluences[index],
              Math.abs(Math.sin(state.clock.elapsedTime * 12)) * 0.6, // Thoda tez aur bada muh khulega
              0.5
            );
          }
        }
      });
    } else {
      // Muh band karna
      avatar.scene.traverse((child) => {
        if (child.isMesh && child.morphTargetDictionary) {
          // Wahi smart search yahan bhi use karein
          const targetName = Object.keys(child.morphTargetDictionary).find(key => 
            key.includes("viseme_aa") || 
            key.includes("jawOpen") || 
            key.includes("mouthOpen") || 
            key.toLowerCase().includes("open")
          );

          if (targetName) {
            const index = child.morphTargetDictionary[targetName];
            child.morphTargetInfluences[index] = THREE.MathUtils.lerp(child.morphTargetInfluences[index], 0, 0.1);
          }
        }
      });
    }
  });

  // --- AUDIO PLAY ---
  const playAudio = () => {
    if (!isTalking) {
      audio.play();
      setIsTalking(true);
      audio.onended = () => setIsTalking(false);
    }
  };

  return (
    <group ref={group} position={[0, -1.5, 0]} scale={1.8}>
      <primitive object={avatar.scene} />
      
      {/* Invisible Click Box */}
      <mesh position={[0, 1.5, 0]} scale={[1, 2, 1]} onClick={playAudio} visible={false}>
        <boxGeometry />
        <meshBasicMaterial color="red" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
