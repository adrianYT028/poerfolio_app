import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Project } from '../../data/projects';

interface PlanetProps {
  project: Project;
  onClick: () => void;
  isSelected: boolean;
}

export function Planet({ project, onClick, isSelected }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const frameCount = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    frameCount.current++;
    
    if (planetRef.current) {
      // Orbit around center
      const angle = timeRef.current * project.orbitSpeed;
      planetRef.current.position.x = Math.cos(angle) * project.orbitRadius;
      planetRef.current.position.z = Math.sin(angle) * project.orbitRadius;
      
      // Rotate planet
      planetRef.current.rotation.y += 0.005;
      
      // Float animation
      planetRef.current.position.y = Math.sin(timeRef.current * 0.5) * 0.3;
    }

    if (glowRef.current && planetRef.current) {
      glowRef.current.position.copy(planetRef.current.position);
      // Pulse effect for selected planet
      if (isSelected) {
        const scale = 1.3 + Math.sin(timeRef.current * 2) * 0.1;
        glowRef.current.scale.setScalar(scale);
      }
    }

    // Update text position less frequently (every 2 frames) for better performance
    if (textRef.current && planetRef.current && frameCount.current % 2 === 0) {
      textRef.current.position.x = planetRef.current.position.x;
      textRef.current.position.y = planetRef.current.position.y + project.planetSize + 0.8;
      textRef.current.position.z = planetRef.current.position.z;
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group>
      {/* Glow effect */}
      <Sphere
        ref={glowRef}
        args={[project.planetSize * 1.2, 32, 32]}
      >
        <meshBasicMaterial
          color={project.planetColor}
          transparent
          opacity={isSelected ? 0.3 : 0.15}
        />
      </Sphere>

      {/* Main planet */}
      <Sphere
        ref={planetRef}
        args={[project.planetSize, 32, 32]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <MeshDistortMaterial
          color={project.planetColor}
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>

      {/* Planet label */}
      <Text
        ref={textRef}
        fontSize={0.35}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
        maxWidth={3}
      >
        {project.name}
      </Text>

      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[project.orbitRadius - 0.02, project.orbitRadius + 0.02, 64]} />
        <meshBasicMaterial
          color={project.planetColor}
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
