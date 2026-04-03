'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

const content = {
  es: {
    back: "Volver",
    role: "Director & Director de Fotografía",
    bio: [
      "(San Juan, 1987) Juan F. Montes es Productor Audiovisual; propietario y director de la productora independiente Mulánima Visual. También trabaja como camarógrafo, director de fotografía y guionista tanto en proyectos independientes como en grandes producciones.",
      "En 2010 inició su carrera trabajando en diversos medios de televisión locales, acumulando conocimientos y experiencia.",
      "En 2013 comenzó su actual empresa independiente, Mulánima Visual, desempeñándose como productor, guionista, director y posproductor. También produce publicidad, proyectos institucionales, documentales cortos y campañas políticas; videos de danza y musicales para bandas de renombre como Agoria, Pijama Party, Simón Poxyrán, Asap Crew y Canal 46.",
      "Ha participado en importantes campañas y festivales nacionales y regionales, como los shows finales de la Fiesta Nacional del Sol desde 2015 hasta su edición más reciente, y la Fiesta Nacional de la Vendimia 2020, como operador de cámara y director de campaña. También ha trabajado para grandes marcas de moda como Jazmín Chebar y Marie.",
      "Ganador de premios como 'THE NAPOLITAN VICTORY AWARD' por 'Mejor Campaña Institucional' en 2018; distinciones en el FEPI 2014 en las categorías de 'Campañas' y 'Campañas de Bien Público', recibiendo estatuillas de bronce por 'Vitaminas para la Vida'.",
      "En 2017 produjo el informativo cultural Salí En San Juan, la primera experiencia de web-TV en la provincia.",
      "Esta es la primera vez que produce un largometraje documental. Planea dedicar su carrera profesional exclusivamente al documentalismo y la dirección de ficción."
    ],
    statementTitle: "Declaración del Director",
    motivation: "MOTIVACIÓN:",
    quote: "\"Cuando una cultura pierde sus costumbres y tradiciones, pierde su identidad.\"",
    statementBody: [
      "Creo que la realidad a menudo supera con creces a la ficción y que las historias son más interesantes que los hechos. El cine documental es un medio ideal para expresarme. Capto mi percepción y la de otros, del mundo que me rodea, en imágenes.",
      "Busco encontrar una forma de acceder a la realidad que ilumine y transforme no solo al espectador, sino también al protagonista y al equipo técnico, a través de una experiencia difícil de olvidar.",
      "Si veo algo que nadie más ve, me gustaría poder compartirlo y hacerlo parte del imaginario colectivo. Para brindar nuevas perspectivas sobre personas reales.",
      "Como mi primer proyecto de largometraje documental, es una oportunidad invaluable para lanzar mi carrera profesional. Mi relación con Valle Fértil y las Sierras de Elizondo ha sido parte de mi vida desde niño.",
      "Considero sumamente importante documentar estos temas socioculturales. Ayuda a reflexionar, promover el respeto y proteger este tipo de comunidades. Trabajando con el documental como una forma de rescate, en la que se inmortaliza la magia de las culturas.",
      "Por mi perspectiva en cada cuadro, cada corte, el diseño sonoro y cada decisión, será una película que, en cierto modo, también cuenta mi propia historia. Inconsciente y simbólicamente, cuento mi propia historia en las historias de los personajes."
    ]
  },
  en: {
    back: "Back",
    role: "Director & Cinematographer",
    bio: [
      "(San Juan, 1987) Juan F. Montes is an Audiovisual Producer; owner and director of the independent production company Mulánima Visual. He also works as a cameraman, director of photography, and scriptwriter on both independent projects and major productions.",
      "In 2010, he began his career working in various local television media outlets, accumulating knowledge and experience.",
      "In 2013, he started his current independent company, Mulánima Visual, serving as producer, scriptwriter, director, and post-producer. He also produces advertising, institutional projects, short documentaries, and political campaigns; dance and music videos for renowned bands such as Agoria, Pijama Party, Simón Poxyrán, Asap Crew, and Channel 46.",
      "He has participated in important national and regional campaigns and festivals, such as the final shows of the Fiesta Nacional del Sol from 2015 to its most recent edition, and the Fiesta Nacional de la Vendimia 2020, as a camera operator and campaign director. He has also worked for major fashion brands such as Jazmin Chebar and Marie.",
      "He has won awards such as 'THE NAPOLITAN VICTORY AWARD' for 'Best Institutional Campaign' in 2018; distinctions at the 2014 FEPI in the 'Campaigns' and 'Public Good and Corporate Social Responsibility Campaigns' categories, receiving bronze statuettes for the 'Vitamins for Life' campaign.",
      "In 2017, he produced the cultural news program Salí En San Juan, the first web-TV experience in the province.",
      "This is the first time he's producing a feature-length documentary. He also has several projects in development, which he plans to pursue with the goal of pursuing a professional career as a documentary filmmaker and fiction director."
    ],
    statementTitle: "Director Statement",
    motivation: "MOTIVATION:",
    quote: "\"When a culture loses its customs and traditions, it loses its identity.\"",
    statementBody: [
      "I think that reality often far surpasses fiction and that stories are more interesting than facts. Documentary film is an ideal medium for expressing myself. I capture my perception and that of others, of the world around me, in images.",
      "I seek to find a way to access reality that illuminates and transforms not only the viewer, but also the protagonist and the technical team, through an experience that is difficult to forget.",
      "If I see something that no one else sees, I would like to be able to share it and make it part of the collective imagination. To provide new perspectives and points of view on real situations involving real people.",
      "As my first feature-length documentary project, it's a great opportunity to launch my professional career. My relationship with Valle Fértil and the Sierras de Elizondo has been a part of my life since I was a child.",
      "I believe it is extremely important to document these sociocultural themes. It helps to reflect, promote respect, and protect these types of communities by immortalizing the magic of cultures.",
      "Because of my perspective in every frame, every cut, the sound design, and every decision, it will be a film that, in a way, also tells my own story. Unconsciously and symbolically, I tell my own story in the characters' stories."
    ]
  }
};

export default function NosotrosPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  return (
    <div className="bg-[#000000] min-h-screen text-gray-200 font-sans selection:bg-red-500/30 selection:text-red-500 relative overflow-x-hidden p-6 md:p-12">
      
      {/* Navigation & Language Toggle */}
      <div className="flex justify-between items-center mb-12 md:mb-24 relative z-50">
        <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-white transition-all duration-500">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </Link>
        
          <div className="flex items-center gap-6">
            <div className="flex bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
              <button 
                onClick={() => setLang('es')}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${lang === 'es' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${lang === 'en' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            <div className="w-16 md:w-20 transition-all duration-1000 animate-metallic">
              <img 
                src="/logo-jfm.png" 
                alt="Juan F. Montes" 
                className="w-full h-auto" 
              />
            </div>
          </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Image & Main Info (Left Column) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-12">
            <div className="relative group overflow-hidden bg-white/5 rounded-sm p-1">
              <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
                <img
                  src="/juan_face.png"
                  alt="Juan F. Montes"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-extralight text-white uppercase tracking-tighter leading-none">Juan F. Montes</h1>
              <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.4em] font-medium">{t.role}</p>
              
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href="https://www.instagram.com/juan_f._montes" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="https://www.linkedin.com/in/juanfmontes" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:montesjuanfrancisco@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Content (Right Column) */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Bio Section */}
            <div className="space-y-8">
              <h2 className="text-white/20 text-[10px] uppercase tracking-[1em] font-bold">Bio</h2>
              <div className="space-y-6 text-sm md:text-base leading-relaxed font-light text-gray-400">
                {t.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Director Statement Section */}
            <div className="space-y-12 pb-24 border-t border-white/5 pt-24">
              <h2 className="text-white/20 text-[10px] uppercase tracking-[1em] font-bold">{t.statementTitle}</h2>
              
              <div className="space-y-12">
                <div className="relative group">
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-white/10 group-hover:bg-red-500 transition-colors duration-700" />
                  <p className="text-xl md:text-3xl text-white font-extralight italic tracking-tight leading-snug">
                    {t.quote}
                  </p>
                </div>

                <div className="space-y-8 text-sm md:text-base leading-relaxed font-light text-gray-400">
                  <span className="text-white/60 font-bold uppercase tracking-widest text-[10px] block border-b border-white/5 pb-2 mb-6">
                    {t.motivation}
                  </span>
                  {t.statementBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}
