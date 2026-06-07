import team1 from '../assets/images/team1.webp';
import team2 from '../assets/images/team2.webp';
import team3 from '../assets/images/team3.webp';
import team4 from '../assets/images/team4.webp';
import team5 from '../assets/images/team5.webp';
import team6 from '../assets/images/team6.webp';
import team7 from '../assets/images/team7.webp';
import team8 from '../assets/images/team8.webp';
import team9 from '../assets/images/team9.webp';

import { useEffect, useState } from 'react';
import { gsap } from "gsap";

const data = [
    {key: 1, title: "Dr. Rick McCartney", role: "Diretor Executivo de Genômica", img: team1},
    {key: 2, title: "Chris Koha", role: "Diretor de Operações Clínicas", img: team2},
    {key: 3, title: "Caroline Nieto", role: "Chefe de Terapias Celulares", img: team3},
    {key: 4, title: "Victor Albertos", role: "Diretor de Bioinformática & IA", img: team4},
    {key: 5, title: "Dr. Jana Hapfelmeier", role: "Diretora de Reprogramação Epigenética", img: team5},
    {key: 6, title: "Michael Robin", role: "Diretor de Relações Clínicas", img: team6},
    {key: 7, title: "Adrian Rubio", role: "Diretor de Engenharia Molecular", img: team7},
    {key: 8, title: "Cy Serrano", role: "Diretor de Desenvolvimento de Terapias", img: team8},
    {key: 9, title: "Lenya McGrath", role: "VP de Alianças Biotecnológicas", img: team9},
]

function List() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (window.innerWidth >= 768) return; // Accordion only on mobile devices
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable hover effects on touch devices
    
    const list = document.querySelectorAll('.listelem');
    const handlers = [];

    list.forEach((el) => {
      let lastRotate = 0;

      const handleMouseMove = (dets) => {
        const rect = el.getBoundingClientRect();
        const diffY = dets.clientY - rect.top;
        const diffX = dets.clientX - rect.left;
        
        const diffrot = dets.clientX - lastRotate;
        lastRotate = dets.clientX;

        gsap.to(el.querySelector(".picture"), {
          opacity: 1,
          ease: "power4.out",
          top: diffY,
          left: diffX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        });
      };

      const handleMouseEnter = () => {
        gsap.to(el.querySelector(".bluelayer"), {
          height: '100%', 
          ease: "power4.out",
          duration: 0.2
        });
        gsap.to(el.querySelectorAll("h1, h3"), {
          color: "var(--light)",
          duration: 0.2
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el.querySelector(".picture"), {
          opacity: 0, 
          ease: "power4.out", 
          duration: 0.5
        });
        gsap.to(el.querySelector(".bluelayer"), {
          height: '0%',  
          ease: "power4.out", 
          duration: 0.2
        });
        gsap.to(el.querySelectorAll("h1, h3"), {
          color: "",
          duration: 0.2
        });
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);

      handlers.push({ el, handleMouseMove, handleMouseEnter, handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ el, handleMouseMove, handleMouseEnter, handleMouseLeave }) => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="list-container">
      {data.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            onClick={() => toggleAccordion(index)}
            className="listelem w-full py-5 md:px-[4vh] md:py-[6vh] 
            flex flex-col md:flex-row justify-between items-stretch md:items-center
            border-b border-black/15 relative gap-4 cursor-pointer md:cursor-default"
          >
            {/* Top row containing Number, Name, and chevron toggle icon on mobile */}
            <div 
              className="relative flex-grow w-full flex 
              items-center justify-between z-[3]"
            >
              <div className="left flex flex-col md:flex-row md:items-center gap-1 md:gap-14 md:text-5xl">
                <h3 className="hidden md:inline-block opacity-25 transition-colors duration-200">0{item.key}</h3>
                <h1 className="text-black text-xl md:text-[6vh] transition-colors duration-200 font-semibold">{item.title}</h1>
              </div>
              
              {/* Desktop Role Display */}
              <h3 className="hidden md:block font-[Sansita] text-sm md:text-[2.4vh] font-medium tracking-tight transition-colors duration-200 text-zinc-500 md:text-black">
                {item.role}
              </h3>

              {/* Mobile Accordion Toggle Icon */}
              <div className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-black">
                <span className={`text-xl font-medium transition-transform duration-300 transform leading-none ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </div>
            </div>

            {/* Mobile Expandable Area */}
            <div 
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out w-full flex items-center gap-6 ${isOpen ? "max-h-40 opacity-100 mt-2 py-2" : "max-h-0 opacity-0 py-0"}`}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-md border border-black/10">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-zinc-400 font-semibold text-[1.2vh] tracking-wider uppercase mb-0.5">Cargo / Especialidade</span>
                <h3 className="font-[Sansita] text-zinc-800 text-base font-semibold leading-snug">
                  {item.role}
                </h3>
              </div>
            </div>

            {/* Desktop picture and hover layers */}
            <div 
              className="hidden md:block picture w-[15rem] h-[15rem] flex-shrink-0
              overflow-hidden rounded-full pointer-events-none absolute z-[4]
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
            >
              <img src={item.img} className="w-[100%] h-[100%] object-cover rounded-full" alt={item.title} />
            </div>
            <div className="hidden md:inline-block bluelayer md:absolute top-0 left-0 z-[2] w-full h-0 bg-[var(--blue)]"></div>
          </div>
        )
      })}
    </div>
  )
}

export default List;
