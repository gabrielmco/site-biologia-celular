
import Card from "../Card";
import Button from "../Button";
import {useRef, useEffect} from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4, } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Craft() {
    const container = useRef(null);

    useGSAP(() => {
        const para = container.current.querySelector(".texthead");
        if (para) {
            // Safe cached original text to prevent double-splitting on hot reload or re-renders
            if (!para.dataset.originalText) {
                para.dataset.originalText = para.textContent;
            }

            const originalText = para.dataset.originalText;
            let clutter = "";
            const words = originalText.trim().split(/\s+/);
            words.forEach(function(word) {
                clutter += `<span style="display: inline-block; white-space: nowrap;">${word}</span> `;
            });
            para.innerHTML = clutter;
            
            const spans = para.querySelectorAll("span");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            });
            tl.from(spans, {
                y: 100,
                opacity: 0,
                duration: 0.5,
                stagger: .1, 
            });
        }

        // Smooth ScrollTrigger animation for .ptag description
        const ptag = container.current.querySelector(".ptag");
        if (ptag) {
            gsap.from(ptag, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                    end: "bottom 50%",
                    scrub: true,
                },
                y: 40,
                opacity: 0,
                ease: "power2.out"
            });
        }

        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const cards = container.current.querySelector(".cards");
            const cardElements = container.current.querySelectorAll('.card');
            if (cards && cardElements.length > 0) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: cards,
                        start: "top 10%",
                        scrub: true,   
                    }
                });
                tl.fromTo(cardElements, {
                    y: 600,
                    scale: .9,
                }, {
                    y: 0,
                    scale: 1.1,
                    duration: .5,
                    ease: Power4,
                    transformOrigin: "bottom 50% -50",
                });
            }
        });
    }, { scope: container });

   
  return (
    <section 
        data-color="cyan" 
        className="craft section w-full flex flex-col md:flex-row gap-y-12 md:gap-x-20 xl:gap-x-40 justify-between 
          items-start px-6 pt-16 pb-8 md:px-12 relative"
    >
        <div className="ltext w-full md:sticky md:top-[20%] left-0 md:w-1/2">
            <div className="mb-8 inline-block px-4 py-1.5 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-full text-[1.4vh] uppercase tracking-widest font-semibold text-white/90">
                Inovação Biotecnológica
            </div>
            
            {/* Liquid Glass Metrics Panel */}
            <div className="mb-10 w-full backdrop-blur-md bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
                <div className="w-full sm:w-auto">
                    <h4 className="text-zinc-400 font-medium text-[1.4vh] uppercase tracking-widest mb-2">Eficácia Terapêutica</h4>
                    <p className="text-white text-[3.5vh] font-[SansitaReg] leading-none">98.4% <span className="text-[var(--salmon)] font-[Sansita] text-[1.6vh] ml-2 align-middle">↑ Validação</span></p>
                </div>
                <div className="w-full h-[1px] sm:w-[1px] sm:h-14 bg-white/10"></div>
                <div className="w-full sm:w-auto">
                    <h4 className="text-zinc-400 font-medium text-[1.4vh] uppercase tracking-widest mb-2">Reversão de Idade</h4>
                    <p className="text-white text-[3.5vh] font-[SansitaReg] leading-none">-8.4<span className="text-[2vh] ml-1 text-zinc-500">anos</span></p>
                </div>
            </div>

            <p 
                className="ptag font-[Sansita] text-[2.2vh] md:text-[2.9vh] 
                font-medium leading-[3.6vh] md:leading-[4.2vh]"
            >
                Aeterna é uma pioneira em biotecnologia regenerativa fundada na convicção
                de que a ciência avançada pode desbloquear a longevidade humana máxima. Nós reconectamos
                a tecnologia celular com o potencial de uma vida longa e ativa, simplificando
                processos genéticos complexos e acelerando a renovação orgânica.
            </p>
            <h1 className="texthead font-[SansitaReg] text-[4vh] leading-[5vh] md:text-[8.5vh] md:leading-[10vh] mt-8 mb-8">Nós Desenvolvemos o Futuro da Longevidade Humana</h1>
            {/* button */}
            <Button  bgColor="bg-none" text="EXPLORAR TERAPIAS" />
        </div>
        <div
            ref={container} 
            className="right cards w-full md:w-1/2 flex flex-col items-center justify-start pt-4 md:pt-20 mt-8 md:mt-24"
        >                
            <Card />
        </div>
    </section>
  )
}

export default Craft



