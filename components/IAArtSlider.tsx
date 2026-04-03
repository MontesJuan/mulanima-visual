"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const iaVideos = [
  { id: 1, src: "/videos/ia-art-1.mp4", title: "CEREBRA AI", description: "Experiment #01 - Neural Architecture" },
  // { id: 2, src: "/videos/ia-art-2.mp4", title: "SYNTHESIS", description: "Experiment #02 - Liquid Metal" },
  // { id: 3, src: "/videos/ia-art-3.mp4", title: "VOID", description: "Experiment #03 - Deep Dreams" },
];

export default function IAArtSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Modern slow parallax effect for the title
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

      <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div style={{ y, opacity }} className="absolute -top-32 -left-20 pointer-events-none">
          <h2 className="text-[200px] font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap hidden md:block">
            Generative
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div>
            <span className="block text-[10px] text-red-600 uppercase tracking-[0.4em] font-bold mb-4">
              Experimental Track
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter uppercase">
              IA <span className="font-bold">Art</span>
            </h2>
          </div>
          <p className="text-gray-500 font-light max-w-sm text-sm uppercase tracking-widest leading-relaxed">
            Explorations at the intersection of human cinematography and artificial intelligence.
          </p>
        </div>
      </div>

      <div className="w-full relative z-10 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-12 pb-12 flex gap-8">
        {iaVideos.map((video) => (
          <div 
            key={video.id}
            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-video relative group snap-center rounded-sm overflow-hidden bg-black border border-white/10"
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <span className="text-[10px] text-white/50 uppercase tracking-[0.4em] mb-2 block">
                {video.description}
              </span>
              <h3 className="text-2xl text-white font-light uppercase tracking-widest">
                {video.title}
              </h3>
            </div>
            
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        ))}
        {/* Placeholder for incoming videos */}
        <div className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-video relative group snap-center rounded-sm border border-dashed border-white/20 flex items-center justify-center bg-white/[0.01]">
           <div className="text-center opacity-30">
               <span className="block text-2xl mb-2 font-light">+</span>
               <span className="text-[10px] uppercase tracking-widest">Incoming Data</span>
           </div>
        </div>
      </div>
    </section>
  );
}
