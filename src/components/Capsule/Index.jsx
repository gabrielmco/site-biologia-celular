import Button from "../Button";
import {useRef} from 'react';
import cap1 from '../../assets/images/cap1_new.webp';
import cap2 from '../../assets/images/cap2.webp';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

 function Capsule() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "bottom bottom",
                scrub: true,
            }
        });
        tl.to(".capsule:nth-child(2)", {
            y: 0,
            marginTop: 32,
            ease: "power4.out"
        })
        tl.to(".capsule:nth-child(1)", {
            marginTop: 32,
            ease: "power4.out"
        })
    }, { scope: container });


  return (
    <div data-color="white" ref={container} className="capsules section w-full md:h-auto md:min-h-[125vh] 
        md:overflow-visible mb-32 flex flex-col md:flex-row items-start md:justify-between mt-16 md:mt-48 px-6 md:px-8 gap-10 md:gap-40 pb-20"
    >
        <div className="left w-full md:w-1/3 h-full flex flex-col md:justify-between py-10 items-start" >
            <h1 className="w-full md:w-2/3 font-[Sansita] text-[2.2vh] md:text-[2.8vh] leading-relaxed md:leading-[4vh] font-medium text-zinc-800">
                Mantenha-se atualizado sobre as últimas fronteiras da biotecnologia e reprogramação celular.
            </h1>
            <div className="heading mt-6 md:mt-0">
                <h1 className="font-[SansitaReg] text-[5vh] leading-[6vh] md:text-[8vh] py-3 md:py-5 md:leading-[9vh]">Explore <br className="hidden md:block"/> Nossa Ciência</h1>
                <Button bgColor="bg-[var(--blue)]" text="VER TODOS OS ARTIGOS" textColor="text-white" iconColor="white" />
            </div>
        </div>
        <div className="right w-full font-[SansitaReg] mt-10 md:w-2/3 space-y-12 md:space-y-0 h-full flex flex-col md:flex-row items-start justify-start md:gap-20">
            {/* 1st capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-6 md:p-12 md:-rotate-[16deg] md:-translate-y-40
                rounded-3xl md:rounded-full border border-black/15 bg-black/[0.01] max-w-full md:max-w-md shadow-sm">
                <div className="image w-[74vw] h-[74vw] md:w-[40vh] md:h-[40vh] rounded-full overflow-hidden shadow-inner">
                    <img className="h-full w-full object-cover" src={cap1} alt="Fronteiras da Longevidade" />
                </div>
                <div className="text text-center text-lg md:text-[3.2vh] font-semibold mt-8 md:mt-10 leading-relaxed md:leading-[4.8vh] px-4 md:px-8 text-zinc-900">
                    <h3>Reprogramação Epigenética: <br className="hidden md:block"/> Uma
                        Conversa Exclusiva Sobre <br className="hidden md:block"/> Longevidade Celular Com <br className="hidden md:block"/> Caroline 
                        Nieto, <br className="hidden md:block"/> Chefe de Terapias da Aeterna
                    </h3>
                </div>
                <button className="bg-[var(--blue)] text-white px-6 rounded-full text-medium py-3 mb-6 mt-6 md:mt-10 font-semibold tracking-wider text-[1.4vh] uppercase hover:bg-black transition-colors duration-300">Fronteiras da Longevidade</button>
            </div>
            
            {/* 2nd capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-6 md:p-12 md:-rotate-[16deg] md:translate-y-20
                rounded-3xl md:rounded-full border border-black/15 bg-black/[0.01] max-w-full md:max-w-md shadow-sm"
            >
                <div className="image w-[74vw] h-[74vw] md:w-[40vh] md:h-[40vh] rounded-full overflow-hidden shadow-inner">
                    <img className="h-full w-full object-cover" src={cap2} alt="Biomarcadores de Precisão" />
                </div>
                <div className="text text-center text-lg md:text-[3.2vh] flex flex-col gap-4 md:gap-6 mt-8 md:mt-10 mb-6 font-semibold leading-relaxed md:leading-[4.8vh] px-4 md:px-8 text-zinc-900">
                    <h3>Como Utilizar Biomarcadores <br className="hidden md:block"/>
                        de Precisão para <br className="hidden md:block"/> Otimizar o Desempenho Fisiológico Humano
                    </h3>
                    <h4 className="font-[Sansita] text-sm md:text-[1.9vh] font-medium leading-relaxed md:leading-[2.8vh] text-zinc-500">Como usar intervenções biotecnológicas <br className="hidden md:block"/> sob medida para rejuvenescer a idade biológica celular enquanto <br className="hidden md:block"/>
                        otimiza a vitalidade orgânica.
                    </h4>
                </div>
                <button className="bg-[var(--blue)] text-white px-6 rounded-full text-medium py-3 mb-6 mt-6 md:mt-10 font-semibold tracking-wider text-[1.4vh] uppercase hover:bg-black transition-colors duration-300">Fronteiras da Longevidade</button>
            </div>
        </div>
    </div>
  )
}

export default Capsule

