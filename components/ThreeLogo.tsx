'use client';

import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows, PresentationControls, Stage, useProgress, Html } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-[1px] bg-white/10 relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-white/60 transition-all duration-300" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <span className="text-[7px] uppercase tracking-[0.4em] text-white/30 font-light">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  // Center and scale the model automatically
  useMemo(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        // Apply a premium metallic finish if materials are present
        if (obj.material) {
          obj.material.roughness = 0.1;
          obj.material.metalness = 0.9;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={0.9} />;
}

/**
 * ThreeLogo — A high-fidelity 3D logo viewer using Three.js / React Three Fiber.
 * Provides complete control over lighting, background, and interactivity.
 */
export function ThreeLogo() {
  return (
    <div className="w-full h-full relative group">
        <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        
        {/* Adds natural lighting environment */}
        <Environment preset="city" />
        
        <PresentationControls
          global
          cursor={true}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
          >
            <Suspense fallback={<Loader />}>
              {/* Stage provides better automatic framing and studio lighting */}
              <Stage intensity={1} environment="studio" shadows="contact" adjustCamera={true}>
                <Model url="/logo-3d.glb" />
              </Stage>
            </Suspense>
          </Float>
        </PresentationControls>
        
        {/* Subtle shadow for depth */}
        <ContactShadows 
          position={[0, -1.2, 0]} 
          opacity={0.3} 
          scale={8} 
          blur={2.4} 
          far={1} 
        />
      </Canvas>
    </div>
  );
}

// Pre-load the model to prevent UI jumps
useGLTF.preload('/logo-3d.glb');
