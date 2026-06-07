import img1 from '../../assets/images/review2.webp';
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Para2() {
    const container = useRef(null);

    useGSAP(() => {
        const para = container.current.querySelector(".textpara2");
        if (!para) return;

        // Store original text clean to avoid duplicate splitting
        if (!para.dataset.originalText) {
            para.dataset.originalText = para.textContent;
        }

        const originalText = para.dataset.originalText;
        let clutter = "";
        originalText.split("").forEach((char) => {
            clutter += `<span>${char}</span>`;
        });
        para.innerHTML = clutter;

        const spans = para.querySelectorAll("span");
        gsap.set(spans, { opacity: 0.1 });
        gsap.to(spans, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "bottom 90%",
                scrub: true,
            },
            opacity: 1,
            stagger: 0.03,
        });
    }, { scope: container });

  return (
    <div ref={container} data-color="white" className="para2 section w-full flex items-center justify-center px-6 md:px-8 py-12 md:py-20 md:-translate-y-1/5">
        <div className="text w-full md:w-[80%] flex flex-col items-center justify-center">
            <div className="hidden md:flex w-[40%] items-center justify-center mb-12">
                <hr className="bg-zinc-400 w-[20%] h-[.3vh]" />
            </div>    
            <h3 className="textpara2 w-full md:w-[60%] text-zinc-800 font-[Sansita] text-lg md:text-[3.2vh] font-medium text-center tracking-wide leading-relaxed md:leading-[4.8vh] mb-10">A cooperação com a Aeterna Life e suas terapias celulares personalizadas foi um marco absoluto para nossos programas globais de medicina regenerativa preventiva. Nossos parceiros e pacientes estão profundamente satisfeitos com os resultados clínicos mensuráveis e a reversão de biomarcadores inflamatórios. A elegância com que combinam genômica e acompanhamento personalizado de estilo de vida de luxo torna o processo simples e incrivelmente eficaz.</h3>
            <div className="pers w-full md:w-[50%] flex flex-col items-center justify-center gap-2">
                <div className="image w-24 h-24 overflow-hidden rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                    <img src={img1} className="w-full h-full object-cover" alt="Dr. Emek Altun" />
                </div>
                <h1 className="text-xl md:text-[3vh] font-semibold text-zinc-900">Dr. Emek Altun</h1>
                <h3 className="text-zinc-500 text-sm md:text-[2.2vh] text-center font-medium">Diretor Médico @ Vitaservices</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para2
