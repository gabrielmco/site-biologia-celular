import icon1 from '../../assets/images/icon1.webp';
import icon2 from '../../assets/images/icon2.webp';
import icon3 from '../../assets/images/icon3.webp';

// Local WebP biotechnology and science assets
import img1 from '../../assets/images/real1.webp';
import img2 from '../../assets/images/real2.webp';
import img3 from '../../assets/images/real3.webp';
import img4 from '../../assets/images/real4.webp';
import img5 from '../../assets/images/real5.webp';
import img6 from '../../assets/images/real6.webp';
import img7 from '../../assets/images/real7.webp';
import img8 from '../../assets/images/real8.webp';
const img9 = img8; // Reutilizando real8.webp para consistência e harmonia visual

import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {
    const container = useRef(null);
    
    useGSAP(() => {
        let mm = gsap.matchMedia();
        
        // Execute horizontal scrolling animation ONLY on screens >= 768px
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
             });
             tl.to(".slide", {
                xPercent: -300,
                ease: "power2.out"
             });
             tl.to(".image7", {
                opacity: 0,
              });
        });
        
        return () => mm.revert();
    }, { scope: container });

  return (
    <section  
        data-color="cyan" 
        ref={container} 
        className="real section w-full px-6 md:px-8 mt-16 md:mt-32"
    >
      <div className="cont h-auto md:h-[600vh] relative w-full">
        <div className="slides w-full flex flex-col md:flex-row md:h-[130vh] md:overflow-hidden md:sticky md:top-0 md:left-0 gap-20 md:gap-0">
            {/* 1st slide */}
            <div className="slide w-full flex flex-col md:flex-row items-center justify-center min-h-[60dvh] md:h-[100dvh] md:flex-shrink-0 relative gap-8">
                <div className="text1 font-[SansitaReg] text-[5vh] leading-[6vh] md:text-[15vh] md:leading-[18vh] text-center md:text-left z-10">
                    <h1 className="">Fatos Reais,</h1>
                    <h1 className="">Ciência Real</h1>
                </div>
                <div className="image relative md:absolute w-[24vh] h-[24vh] md:w-[45vh] md:h-[45vh] md:-translate-y-1/2 md:translate-x-1/2 md:top-1/2 md:right-0 z-[2]">
                    <img 
                       src={img1}
                        className="w-full h-full object-cover rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                        alt="Ciência Celular"
                    />
                </div>
            </div>

            {/* 2nd slide */}
            <div className="slide w-full min-h-[60dvh] md:h-[100dvh] flex items-center justify-center md:flex-shrink-0 relative py-8">
                <div className="image hidden md:block absolute w-[40vh] h-[40vh] top-10 -translate-y-1/2 right-1/6">
                    <img 
                        src={img2}
                        className="w-full h-full object-cover rounded-full"
                        alt="Ciência Celular 2"
                    />
                </div>
                <div className="w-full px-4 md:w-[60%] md:px-0 text-center font-[SansitaReg] relative z-10">
                    <h3 className="font-[Sansita] w-full md:w-1/3 text-center md:text-left font-semibold tracking-tight text-[1.8vh] md:text-[2.2vh] relative md:absolute md:top-0 md:left-0 z-[3] md:-translate-y-1/2 md:-translate-x-1/3 mb-6 md:mb-0">
                        Estamos em uma missão para prolongar a longevidade active do maior número de pessoas possível. Aqui está o nosso progresso científico.
                    </h3>
                    <h1 className="font-semibold text-[8vh] md:text-[20vh] leading-none text-[var(--light)] mb-2">
                        20.4M
                    </h1>
                    <h3 className="text-[2.2vh] md:text-[5vh] font-semibold md:leading-[7vh]">
                        Anos de vida ativa e saudável estendidos através de nossas terapias genéticas de precisão.
                    </h3>    
                </div>
                <div className="image hidden md:block absolute w-[20vh] h-[20vh] top-2/3 left-1/4 -translate-x-1/2">
                    <img 
                        src={img4}
                        className="w-full h-full object-cover rounded-full"
                        alt="Pesquisa"
                    />
                </div>
                <div className="image hidden md:block absolute w-[45vh] h-[45vh] bottom-0 right-1/6 -translate-x-[50%] translate-y-1/2">
                    <img 
                        src={img3}
                        className="w-full h-full object-cover rounded-full"
                        alt="Laboratório"
                    />
                </div>
                <div className="image hidden md:block absolute w-[45vh] h-[45vh] top-1/2 -translate-y-1/2 translate-x-1/2 right-0">
                    <img 
                        src={img5}
                        className="w-full h-full object-cover rounded-full"
                        alt="Estrutura de Proteína"
                    />
                </div>
            </div>
            
            {/* 3rd slide */}
            <div className="slide w-full min-h-[60dvh] md:h-[100dvh] flex items-center justify-center md:flex-shrink-0 relative py-8">
                <div className="image hidden md:block absolute w-[45vh] h-[45vh] top-20 -translate-x-1/5 -translate-y-1/2 right-1/6">
                    <img 
                        src={icon2}
                        className="w-full h-full object-contain rounded-full"
                        alt="Ícone 2"
                    />
                </div>
                <div className="w-full px-4 md:w-[60%] md:px-0 text-center font-[SansitaReg] relative z-10">
                    <h3 className="font-[Sansita] w-full md:w-1/3 text-center md:text-left font-semibold tracking-tight text-[1.8vh] md:text-[2.5vh] relative md:absolute md:top-0 md:left-0 z-[3] md:-translate-y-1/2 md:-translate-x-1/3 mb-6 md:mb-0">
                        Nosso corpo de pesquisa é composto pelas mentes mais brilhantes e diversas do planeta, unindo química, IA e medicina.
                    </h3>
                    <h1 className="font-semibold text-[8vh] md:text-[20vh] leading-none text-[var(--light)] mb-2">
                        49%
                    </h1>
                    <h3 className="text-[2.2vh] md:text-[6vh] font-semibold md:leading-[6vh] text-center">
                        Mulheres Cientistas e Pesquisadoras Líderes.
                    </h3>    
                </div>
                <div className="image hidden md:block absolute w-[38vh] h-[38vh] bottom-2 right-2/4 translate-y-[20%] -translate-x-[10%]">
                    <img 
                        src={icon1}
                        className="w-full h-full object-contain rounded-full"
                        alt="Ícone 1"
                    />
                </div>
                <div className="image hidden md:block absolute w-[50vh] h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/2 right-0">
                    <img 
                        src={icon3}
                        className="w-full h-full object-contain rounded-full"
                        alt="Ícone 3"
                    />
                </div>
            </div>

            {/* 4th slide */}
            <div className="slide w-full min-h-[60dvh] md:h-[100dvh] flex items-center justify-center md:flex-shrink-0 relative py-8">
                <div className="image hidden md:block absolute w-[40vh] h-[40vh] top-10 translate-x-1/2 -translate-y-1/2 right-2/3">
                    <img 
                        src={img6}
                        className="w-full h-full object-cover rounded-full"
                        alt="Pesquisadores"
                    />
                </div>
                <div className="w-full px-4 md:w-[60%] md:px-0 text-center font-[SansitaReg] relative z-10">                   
                    <h1 className="font-semibold text-[8vh] md:text-[20vh] leading-none text-[var(--light)] mb-2">
                        13
                    </h1>
                    <h3 className="text-[2.2vh] leading-[3vh] md:text-[6vh] font-semibold md:leading-[8vh]">
                        Centros Globais de Pesquisa <br className="hidden md:block" /> Clínica Avançada.
                    </h3>    
                </div>
                <div className="image7 hidden md:block absolute w-[45vh] h-[45vh] bottom-0 right-2/4 translate-y-1/2 -translate-x-[42%]">
                    <img 
                        src={img7}
                        className="w-full h-full object-cover rounded-full"
                        alt="Equipamento"
                    />
                </div>
                <div className="image hidden md:block absolute w-[45vh] h-[45vh] top-0 translate-y-1/5 translate-x-2/3 right-0">
                    <img 
                        src={img9}
                        className="w-full h-full object-cover rounded-full"
                        alt="Estruturas"
                    />
                </div>
                <div className="image hidden md:block absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5 -translate-x-1/3 right-1/4">
                    <img 
                        src={img8}
                        className="w-full h-full object-cover rounded-full"
                        alt="Microscopia"
                    />
                </div>
            </div>   
        </div>
      </div>
    </section>
  )
}

export default Real;
