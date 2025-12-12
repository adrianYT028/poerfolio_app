import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Stars } from './Stars';
import { Planet } from './Planet';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';

interface SpaceSceneProps {
  onProjectSelect: (project: Project | null) => void;
  selectedProject: Project | null;
}

export function SpaceScene({ onProjectSelect, selectedProject }: SpaceSceneProps) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 5, 20]} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxDistance={50}
          minDistance={10}
          autoRotate
          autoRotateSpeed={0.3}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#4a90e2" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#e24a90" />

        {/* Starfield background */}
        <Stars />

        {/* Central sun */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#ffd700"
            emissive="#ffa500"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Planets for each project */}
        {projects.map((project) => (
          <Planet
            key={project.id}
            project={project}
            onClick={() => onProjectSelect(
              selectedProject?.id === project.id ? null : project
            )}
            isSelected={selectedProject?.id === project.id}
          />
        ))}
      </Suspense>
    </Canvas>
  );
}
