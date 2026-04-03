'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Globe,
  Mail,
  Play,
  ChevronRight,
  ChevronLeft,
  MessageCircle
} from 'lucide-react';

import { SplineScene } from '../components/SplineScene';

// --- DATA MOCKS ---

interface Project {
  id: number;
  client: string;
  title: string;
  director: string;
  year: string;
  image: string;
  category?: string;
  videoLink?: string;
}

const heroProjects: Project[] = [
  {
    id: 2,
    client: "TURISMO Y CULTURA CALINGASTA",
    title: "SERÁS CALINGASTA",
    director: "JUAN F. MONTES",
    year: "2025",
    image: "https://img.youtube.com/vi/22ufVCUlDo4/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=22ufVCUlDo4"
  },
  {
    id: 1,
    client: "SAN JUAN TURISMO",
    title: "INVIERNO SAN JUAN 2025",
    director: "JUAN F. MONTES",
    year: "2025",
    image: "https://img.youtube.com/vi/16KxvcBWyhk/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=16KxvcBWyhk"
  },
  {
    id: 3,
    client: "JUAN F. MONTES",
    title: "SIERRA DOCUMENTAL",
    director: "JUAN F. MONTES",
    year: "2025",
    image: "https://img.youtube.com/vi/69gDyIS-qMI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=69gDyIS-qMI"
  },
  {
    id: 15,
    client: "MARIE",
    title: "EL ORIGEN",
    director: "JUAN F. MONTES",
    year: "2020",
    image: "https://img.youtube.com/vi/P2TnOzLS-Lo/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=P2TnOzLS-Lo"
  },
  {
    id: 18,
    client: "JAZMÍN CHEBAR",
    title: "DIMENSIÓN SURREAL",
    director: "TOMÁS TERZANO",
    year: "2019",
    image: "https://img.youtube.com/vi/ra2FKzVrsMo/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=ra2FKzVrsMo"
  },
  {
    id: 14,
    client: "portho gelatto",
    title: "delivery",
    director: "JUAN F. MONTES",
    year: "2020",
    image: "https://img.youtube.com/vi/CzysEWikXZk/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=CzysEWikXZk"
  }
];

const allProjects: Project[] = [
  ...heroProjects,
  {
    id: 13,
    client: "TURISMO Y CULTURA CALINGASTA",
    title: "RESPIRA CALINGASTA",
    director: "MULÁNIMA",
    year: "2025",
    image: "https://img.youtube.com/vi/PdCeILhVRiw/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=PdCeILhVRiw"
  },
  {
    id: 16,
    client: "fns",
    title: "revelaciones",
    director: "JUAN FRANCISCO MONTES",
    year: "2019",
    image: "https://img.youtube.com/vi/EOzlEaMJP8k/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=EOzlEaMJP8k"
  },
  {
    id: 17,
    client: "FNS",
    title: "EL CALOR DE LO NUESTRO",
    director: "MULÁNIMA",
    year: "2019",
    image: "https://img.youtube.com/vi/E3gi4P9OM4U/hqdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=E3gi4P9OM4U"
  },
  {
    id: 4,
    client: "ASAP CREW",
    title: "LA OLA",
    director: "MULÁNIMA",
    year: "2019",
    image: "https://img.youtube.com/vi/7XJeKOf9hbI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=7XJeKOf9hbI"
  },
  {
    id: 5,
    client: "ALGAR",
    title: "FULGOR",
    director: "MULÁNIMA",
    year: "2018",
    image: "https://img.youtube.com/vi/sppWe5Vx3fk/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=sppWe5Vx3fk"
  },
  {
    id: 6,
    client: "MUNICIPALIDAD SJ",
    title: "REINA DEPARTAMENTAL",
    director: "MULÁNIMA",
    year: "2015",
    image: "https://img.youtube.com/vi/1Icip6iEXag/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=1Icip6iEXag"
  },
  {
    id: 7,
    client: "SERVICIOS SOCIALES",
    title: "PEQUEÑO MAGO",
    director: "MULÁNIMA",
    year: "2016",
    image: "https://img.youtube.com/vi/EEdz7NJqCrE/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=EEdz7NJqCrE"
  },
  {
    id: 8,
    client: "SERVICIOS SOCIALES",
    title: "LO ESENCIAL",
    director: "MULÁNIMA",
    year: "2016",
    image: "https://img.youtube.com/vi/nwZ2NEcKodQ/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=nwZ2NEcKodQ"
  },
  {
    id: 9,
    client: "SERVICIOS SOCIALES",
    title: "COSMONAUTA",
    director: "MULÁNIMA",
    year: "2016",
    image: "https://img.youtube.com/vi/HTGpQSNxTV8/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=HTGpQSNxTV8"
  },
  {
    id: 10,
    client: "PIJAMA PARTY",
    title: "COMERTE A BESOS",
    director: "MULÁNIMA",
    year: "2016",
    image: "https://img.youtube.com/vi/6bidOWpSULE/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=6bidOWpSULE"
  },
  {
    id: 11,
    client: "HATE PARIS",
    title: "AFTER MOVIE",
    director: "MULÁNIMA",
    year: "2015",
    image: "https://img.youtube.com/vi/UjuygRbhyEE/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=UjuygRbhyEE"
  },

];

const clients = [
  "/clients/san_juan_gobierno_v2.png",
  "/clients/portho_v2.png",
  "/clients/calingasta_v2.png",
  "/clients/marie.png",
  "/clients/jazmin_chebar.png",
  "/clients/servicios_sociales_v2.png",
  "/clients/algar.png",
  "/clients/toyota.png",
];

// --- COMPONENTE LOGO ---
import { ThreeLogo } from '../components/ThreeLogo';

interface LogoProps {
  small?: boolean;
}

const Logo = ({ small = false }: LogoProps) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const logoRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (logoRef.current && !small) {
      const rect = logoRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / 10;
      const y = (e.clientY - (rect.top + rect.height / 2)) / 10;
      setMousePos({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={logoRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center cursor-pointer transition-all duration-700 ${small ? 'w-20 h-20' : 'w-[650px] h-[650px]'}`}
      style={{
        perspective: '1200px'
      }}
    >
      <div 
        className="w-full h-full relative transition-transform duration-500 ease-out flex items-center justify-center"
        style={{
          width: !small ? '650px' : '100px',
          height: !small ? '650px' : '100px',
          transform: !small ? `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1)` : 'scale(1)',
          transformStyle: 'preserve-3d'
        }}
      >
        <ThreeLogo />
        
        {!small && (
          <div className="absolute inset-0 z-[-1] opacity-30 blur-3xl bg-gradient-to-r from-amber-500/10 via-white/5 to-amber-500/10 rounded-full animate-pulse pointer-events-none" />
        )}
      </div>
    </div>
  );
};

// --- COMPONENTE MARQUEE ---
interface MarqueeRowProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: string;
}

const MarqueeRow = ({ items, direction = 'left', speed = '30s' }: MarqueeRowProps) => (
  <div className="flex overflow-hidden relative w-full py-8 border-t border-gray-900 bg-black">
    <div
      className={`flex whitespace-nowrap items-center animate-marquee-${direction}`}
      style={{ animationDuration: speed }}
    >
      {[...items, ...items, ...items, ...items].map((item, idx) => (
        <div key={idx} className="mx-8 md:mx-12 w-32 md:w-48 opacity-50 hover:opacity-100 transition-opacity duration-300">
          <img
            src={item}
            alt="Client Logo"
            className="w-full h-auto object-contain brightness-0 invert"
          />
        </div>
      ))}
    </div>
  </div>
);

// --- HELPER FUNCTION ---
const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// --- COMPONENTE VIDEO MODAL ---
const VideoModal = ({ videoId, onClose }: { videoId: string | null, onClose: () => void }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>
      <div className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

// --- COMPONENTE SLIDER HERO ---
const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [interacting, setIsInteracting] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVideo, setIsVideo] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const activeProject = heroProjects[activeSlide];

  // Extraer ID de YouTube
  useEffect(() => {
    if (activeProject?.videoLink) {
      const match = activeProject.videoLink.match(/(?:youtu\.be\/|youtube\.com\/.*v=|youtube\.com\/embed\/)([^#&?]*).*/);
      if (match && match[1]) {
        setVideoId(match[1]);
        setIsVideo(true);
      } else {
        setIsVideo(false);
        setVideoId(null);
      }
    } else {
      setIsVideo(false);
      setVideoId(null);
    }
  }, [activeProject]);

  useEffect(() => {
    setIsInteracting(false);
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * index;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const nextSlide = () => {
    const next = (activeSlide + 1) % heroProjects.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (activeSlide - 1 + heroProjects.length) % heroProjects.length;
    scrollToSlide(prev);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slideWidth = slider.clientWidth;
      const scrollPosition = slider.scrollLeft;
      const index = Math.round(scrollPosition / slideWidth);

      if (index !== activeSlide) {
        setActiveSlide(index);
        setIsInteracting(false);
      }
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [activeSlide]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 pt-48 md:pt-80 relative z-10">
      <div
        ref={sliderRef}
        className="w-full max-w-[95%] md:max-w-[90%] aspect-[16/9] md:aspect-[2.35/1] overflow-x-auto flex snap-x snap-mandatory no-scrollbar rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm"
      >
        {heroProjects.map((project, idx) => {
          const isActive = activeSlide === idx;
          const isInteractingThisSlide = isVideo && interacting;

          return (
            <div key={idx} className="min-w-full h-full relative snap-center flex-shrink-0 group overflow-hidden bg-black">
              {isActive && isVideo && videoId ? (
                <div className={`absolute inset-0 z-0 overflow-hidden ${interacting ? 'z-50' : 'pointer-events-none'}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isInteractingThisSlide ? '0' : '1'}&controls=${isInteractingThisSlide ? '1' : '0'}&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-1000 ease-out 
                      ${isInteractingThisSlide
                        ? 'w-full h-full scale-100'
                        : 'w-full h-full scale-100 md:w-[150%] md:h-[150%] md:scale-125 opacity-80'}`}
                    style={{ pointerEvents: isInteractingThisSlide ? 'auto' : 'none' }}
                  />
                  {isInteractingThisSlide && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsInteracting(false);
                      }}
                      className="absolute top-8 right-8 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-60 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
                />
              )}

              <div className={`absolute inset-0 bg-black/10 pointer-events-none transition-opacity duration-700 ${isInteractingThisSlide ? 'opacity-0' : 'opacity-100'}`} />

              {!isInteractingThisSlide && (
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 z-20 ${isVideo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {project.videoLink ? (
                    <button
                      onClick={() => {
                        if (isActive) setIsInteracting(true);
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 group-hover:border-white/80 z-30"
                    >
                      <Play className="ml-1 w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
                    </button>
                  ) : null}
                </div>
              )}

              <div className={`absolute bottom-8 left-6 md:bottom-16 md:left-16 max-w-[85%] z-10 pointer-events-none transition-opacity duration-700 ${isInteractingThisSlide ? 'opacity-0' : 'opacity-100'}`}>
                <div className="overflow-hidden">
                  <span className="text-amber-500 font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 md:mb-4 block transform translate-y-[150%] group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {project.year} — {project.category || 'Destacado'}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light uppercase leading-[0.9] text-white mb-4 md:mb-6 transform translate-y-[150%] group-hover:translate-y-0 transition-transform duration-700 delay-200 tracking-tight mix-blend-difference break-words pb-2">
                    {project.title}
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-2 md:gap-12 text-[10px] md:text-sm font-medium uppercase text-gray-300 transform translate-y-[150%] group-hover:translate-y-0 transition-transform duration-700 delay-300 tracking-widest mix-blend-difference">
                    <span>{project.client}</span>
                    <span>DIR. {project.director}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroProjects.map((_, idx) => (
          <div
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={`cursor-pointer h-1 rounded-full transition-all duration-500 shadow-sm ${activeSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 text-white/50 hover:text-white hover:bg-black/50 backdrop-blur-sm transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 text-white/50 hover:text-white hover:bg-black/50 backdrop-blur-sm transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-amber-500/30 selection:text-amber-500 relative overflow-x-hidden">

      {/* BACKGROUND ANIMATION */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 filter contrast-125 saturate-[0.2] brightness-50"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/1021782562/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e58c200e36cbe8fcb0a7f0113af40ef0ad878e04e7766b1c485a5543f2962b39" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      </div>

      <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />

      {/* Estilos Globales y Animaciones */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: scrollLeft linear infinite;
        }
        .animate-marquee-right {
          animation: scrollRight linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
        .stroke-text:hover {
          -webkit-text-stroke: 1px rgba(255,255,255,0);
          color: white;
        }
      `}</style>

      {/* DYNAMIC HEADER - INTEGRATES 3D LOGO & SHRINKS ON SCROLL */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-[800ms] ease-in-out flex flex-col items-center justify-center pointer-events-none ${scrolled || isMenuOpen ? 'h-24 bg-black/90 backdrop-blur-md border-b border-white/5' : 'h-[75vh] bg-transparent'}`}>
        
        {/* LOGO CONTAINER: Scales down proportionally to fit the shrinking header */}
        <div 
          className={`pointer-events-auto relative z-50 transition-transform duration-[800ms] ease-in-out cursor-pointer origin-center flex items-center justify-center ${scrolled || isMenuOpen ? 'scale-[0.14]' : 'scale-100'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Logo is kept at full 650px intrinsic size; CSS transforms handle the smooth shrinking */}
          <Logo small={false} />
        </div>

        {/* Ambient Light Behind Logo (Fades away on scroll) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[200px] rounded-full pointer-events-none transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />

        {/* Scroll Indicator (Fades away on scroll) */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-[800ms] ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </header>

      {/* BACKGROUND VIDEO SLIDER - Top element of the page, visible beneath the transparent header */}
      <div className="relative w-full min-h-screen">
        <HeroSlider />
      </div>

      {/* ABOUT SECTION (RE-DESIGNED) */}
      <section id="about" className="py-48 relative z-10 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Portrait with Cinematic Reveal */}
            <div className="relative group overflow-hidden aspect-[4/5] md:max-w-md mx-auto lg:mx-0 reveal-on-scroll">
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
              <img
                src="/juan_face.png"
                alt="Juan F. Montes"
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105 group-hover:rotate-1 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border-[0.5px] border-white/10 scale-95 group-hover:scale-100 transition-transform duration-1000" />
              <div className="absolute bottom-10 left-10 overflow-hidden">
                <span className="block text-[10px] text-white/40 uppercase tracking-[0.8em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 font-bold">
                  (San Juan, 1987)
                </span>
              </div>
            </div>

            {/* Cinematic Text Reveal */}
            <div className="space-y-12 reveal-on-scroll">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-thin text-white tracking-tighter leading-tight uppercase">
                  La realidad supera <br /><span className="italic font-light text-white/60">a la fiction</span>
                </h2>
                <div className="h-px w-24 bg-red-600/50" />
              </div>

              <div className="space-y-8 max-w-xl">
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  Juan F. Montes es un <span className="text-white">Director y Cinematógrafo</span> especializado en narrativa visual. Su búsqueda se centra en encontrar formas de acceder a la realidad que iluminen y transformen a través de experiencias cinematográficas potentes.
                </p>
                <p className="text-sm text-white/30 font-light uppercase tracking-widest leading-relaxed">
                  Specialized in visual narrative and film aesthetics. His work seeks to illuminate and transform through powerful cinematic experiences.
                </p>
              </div>

              <div className="pt-8">
                <Link 
                  href="/nosotros"
                  className="group relative inline-flex items-center gap-12 text-white/50 hover:text-white transition-all duration-700"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Biografía y Manifiesto</span>
                  <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-500">
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-20 border-y border-white/5 bg-black/60 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
          <h3 className="text-white text-sm font-bold uppercase tracking-[0.3em] opacity-70 mb-6">Clientes</h3>
          <p className="max-w-3xl mx-auto text-gray-400 font-light text-sm md:text-base leading-relaxed">
            Nuestro portfolio reúne comerciales, documentales, ficción y videoclips con narrativas visuales únicas. Creamos campañas y contenido de marca innovador que apuestan por una estética potente, emoción real y un estándar alto de calidad.
          </p>
        </div>
        <MarqueeRow items={clients} direction="left" speed="40s" />
        <div className="h-4" />
        <MarqueeRow items={[...clients].reverse()} direction="right" speed="40s" />
      </div>

      <section id="work" className="py-32 md:py-48 relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col mb-24">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 tracking-tighter leading-none">En cada plano contamos una historia</h2>
              <div className="h-0.5 w-24 bg-amber-600/50 mb-6" />
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                Potenciamos el trabajo en equipo y hacemos que lo extraordinario sea posible. Damos vida a proyectos que buscan excelencia, creatividad, una estética cuidada y emoción real.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative py-12 md:py-20 border-b border-white/5 cursor-pointer overflow-hidden flex flex-col md:flex-row md:items-center justify-between transition-all duration-700 hover:px-8"
                onClick={() => project.videoLink && setSelectedVideo(getYouTubeId(project.videoLink))}
              >
                {/* Background Mask Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <span className="text-white/20 text-xs font-bold tracking-[0.5em] font-mono group-hover:text-red-500 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-4xl md:text-7xl lg:text-8xl font-thin text-white uppercase tracking-tighter transition-all duration-700 group-hover:tracking-normal group-hover:italic">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.4em] mt-2 group-hover:text-white transition-colors duration-500">
                      {project.client} — {project.year}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-8 md:mt-0 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 hidden md:block">
                  <div className="w-64 aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>

                {/* Mobile reveal icon */}
                <div className="md:hidden mt-4 self-end">
                  <Play size={20} className="text-white/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTALES SECTION */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-tight">Documentales</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group overflow-hidden bg-black/20 aspect-[2/3] md:max-w-md mx-auto rounded-sm border border-white/5">
              <img
                src="/sierra_poster.jpg"
                alt="Sierra Documental"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h4 className="text-4xl font-light text-white tracking-wide">SIERRA</h4>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed text-sm md:text-base">
                <p>
                  "Sierra" es un viaje profundo al corazón de la montaña, donde sus habitantes se amalgaman con la naturaleza en un microcosmos con reglas propias, forjadas por el aislamiento y el paso del tiempo.
                </p>
                <p>
                  En Vallecito, el rincón más remoto de las Sierras de Elizondo, Ladislao Reyes Chávez —puestero y poeta popular— atesora más de ochocientos poemas manuscritos, con la esperanza de convertirlos en un libro. Con la ayuda de los alumnos de la escuela albergue, que digitalizan sus cuadernos, la vida serrana se despliega en toda su crudeza y belleza: viajes interminables a lomo de mula, oficios heredados, un vínculo profundo con la naturaleza y la resistencia de tradiciones en riesgo de desaparecer.
                </p>
                <p>
                  ¿Podrá Reyes cumplir el sueño de editar su libro? ¿La llegada del Camino de los Sueños traerá verdadero progreso o transformará para siempre la identidad de los serranos?
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://sierradoc.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase text-xs font-bold"
                >
                  Ver Proyecto <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-10 bg-black/90 pt-32 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:col-span-12 gap-8 md:gap-12 mb-24">
            {/* HEADLINE */}
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                DALE VIDA A TUS <span className="text-amber-600 font-normal">IDEAS</span>.
              </h2>
            </div>

            {/* CONTACTO */}
            <div className="md:col-span-3">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">Contacto</h4>
              <div className="flex flex-col space-y-4">
                <a href="mailto:mulanimavisual@gmail.com" className="text-gray-400 hover:text-white transition-colors font-light">
                  mulanimavisual@gmail.com
                </a>
                <p className="text-gray-400 font-light">+54 9 264 510 1344</p>
                <a
                  href="https://wa.me/5492645101344?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20producci%C3%B3n%20audiovisual%20con%20Mul%C3%A1nima%20Visual."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium mt-2"
                >
                  <MessageCircle size={18} />
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>

            {/* UBICACION */}
            <div className="md:col-span-2">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">Ubicación</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                San Juan, Argentina<br />
                Disponible globalmente
              </p>
            </div>

            {/* SOCIAL */}
            <div className="md:col-span-3">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">Social</h4>
              <ul className="space-y-4">
                <li><a href="https://www.instagram.com/mulanima_visual" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 font-light"><Instagram size={18} /> Instagram</a></li>
                <li><a href="https://vimeo.com/mulanima" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 font-light"><Globe size={18} /> Vimeo</a></li>
                <li><a href="https://www.youtube.com/@mulanimavisual9829" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 font-light"><Play size={18} /> YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mb-8 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <Logo small />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 uppercase tracking-widest pt-12 border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} JUAN F. MONTES.</p>
            <p className="mt-4 md:mt-0">Crafted with precision & Japanese Zen.</p>
          </div>
        </div>
      </footer>

      {/* FIXED MENU BUTTON */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group"
        >
          <span className="uppercase tracking-widest text-xs font-bold">{isMenuOpen ? 'Cerrar' : 'Menú'}</span>
          {isMenuOpen ? <X size={16} /> : <div className="space-y-1 group-hover:rotate-90 transition-transform duration-300"><div className="w-4 h-px bg-current"></div><div className="w-4 h-px bg-current"></div></div>}
        </button>
      </div>

      {/* MENU OVERLAY */}
      <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-3xl z-40 transition-transform duration-700 ease-[0.76, 0, 0.24, 1] ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {['Home', 'Nosotros', 'Work', 'Contact'].map((item) => (
            item === 'Nosotros' ? (
              <Link
                key={item}
                href="/nosotros"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl md:text-5xl font-thin text-transparent stroke-text hover:text-white transition-all duration-500 uppercase tracking-tighter"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
              >
                {item}
              </Link>
            ) : (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-3xl md:text-5xl font-thin text-transparent stroke-text hover:text-white transition-all duration-500 uppercase tracking-tighter"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
              >
                {item}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
