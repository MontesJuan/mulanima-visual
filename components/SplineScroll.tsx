"use client";
import React, { useRef, useState, Suspense, lazy } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

// Lazy load Spline to optimize performance as recommended by the Skill
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<any>(null);

  // We track the scroll progress specifically across this 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Inject the scroll progress into the Spline scene variable 'scrollProgress'
  // (Range 0 to 1 as specified in the Spline integration skill)
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (splineApp) {
      // Intenta enviar 'scrollProgress' por si la escena lo usa para animar variables
      splineApp.setVariable('scrollProgress', latest);
    }
  });

  const handleLoad = (app: any) => {
    setSplineApp(app);
  };

  return (
    <div ref={containerRef} className="h-[400vh] w-full relative z-0">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-auto bg-black overflow-hidden">
        
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-xs uppercase tracking-[0.3em] opacity-50">Cargando Experiencia 3D</p>
          </div>
        }>
          <Spline 
            scene="https://prod.spline.design/ieCUMltevoJx1VeV/scene.splinecode" 
            onLoad={handleLoad}
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
        
        {/* Scroll Indicator (Fades out mechanically toward the end) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
           <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
