"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function JFMScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mapeamos el scroll (0-1) a los frames (0-299)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 299]);

  useEffect(() => {
    // Preload de imágenes
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const totalFrames = 300;
      
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        // Cargamos los frames exportados a WebP o los originales si es necesario
        // Basado en el formato sugerido: "frame_{numero}.webp"
        img.src = `/sequence/frame_${i}.webp`; 
        
        await new Promise((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => {
            // Si no encuentra el webp, quizás están usando png y los numeraron con padding
            // como ezgif-frame-001.png
            img.src = `/sequence/ezgif-frame-${String(i+1).padStart(3, '0')}.png`;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false); // resolve anyway to avoid hanging
          };
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
      setLoaded(true);
    };
    loadImages();
  }, []);

  useEffect(() => {
    const render = () => {
      const context = canvasRef.current?.getContext('2d');
      if (context && images.length > 0) {
        const currentIndex = Math.floor(frameIndex.get());
        const img = images[currentIndex] || images[images.length - 1] || images[0];
        
        // Limpiar y dibujar (ajuste 'contain')
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        
        if (img && img.complete && img.naturalWidth !== 0) {
          const hRatio = context.canvas.width / img.width;
          const vRatio = context.canvas.height / img.height;
          const ratio = Math.min(hRatio, vRatio);
          const centerShift_x = (context.canvas.width - img.width * ratio) / 2;
          const centerShift_y = (context.canvas.height - img.height * ratio) / 2;
          
          context.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }
      }
      requestAnimationFrame(render);
    };

    if (loaded) render();
  }, [loaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[400vh] w-full bg-white relative z-0">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        
        {/* Texts Overlays (Optional, tracking the scroll narrative) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
           {/* You can map text opacities using useTransform based on scrollYProgress if desired */}
        </div>

        {!loaded && (
          <div className="absolute z-10 text-black font-mono text-xs uppercase tracking-widest animate-pulse">
            Loading Sequence...
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
}
