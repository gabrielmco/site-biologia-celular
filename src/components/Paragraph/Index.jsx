import img1 from '../../assets/images/review1.webp';
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Para() {
    const container = useRef(null);

    useGSAP(() => {
        const para = container.current.querySelector(".textpara");
        if (!para) return;

        // Store the original text clean to avoid double-splitting/duplicate span nesting
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
                start: "top 70%",
                end: "bottom 90%",
                scrub: true,
            },
            opacity: 1,
            stagger: 0.03,
        });
    }, { scope: container });

  return (
    <div ref={container} data-color="white" className="para section w-full flex items-center justify-center px-6 md:px-8 py-16 md:py-24">
        <div className="text w-full md:w-[80%] flex flex-col items-center justify-center">
            <div className="hidden md:flex w-[40%] items-center justify-center mb-12">
                <hr className="bg-zinc-400 w-[20%] h-[.3vh]" />
            </div>    
            <h3 className="textpara w-full md:w-[60%] text-zinc-800 font-[Sansita] tracking-wide text-lg md:text-[3.2vh] font-medium text-center leading-relaxed md:leading-[4.8vh] mb-10">Fazer parceria com o ecossistema da Aeterna Life tem sido uma revolução! Desenvolvemos um projeto científico pioneiro para mapear e desacelerar biomarcadores de envelhecimento em nossa coorte clínica, e a equipe de bioinformática superou todas as expectativas com sua precisão analítica. Eles priorizam a segurança biológica e entregam uma expertise extraordinária em engenharia molecular. A capacidade de traduzir dados epigenéticos complexos em terapias ativas transformou completamente nosso trabalho.</h3>
            <div className="pers w-full md:w-[50%] flex flex-col items-center justify-center gap-2">
                <div className="image w-24 h-24 overflow-hidden rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                    <img src={img1} className="w-full h-full object-cover" alt="Dra. Miranda Ernst" />
                </div>
                <h1 className="text-xl md:text-[3vh] font-semibold text-zinc-900">Dra. Miranda Ernst</h1>
                <h3 className="text-zinc-500 text-sm md:text-[2.2vh] text-center font-medium">Pesquisadora Clínica @ HealthCheck360</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para
