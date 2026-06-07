import Row from '../Row'
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu, BiX } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";
import heroImg from '../../assets/images/hero.webp';

import cardImg2 from '../../assets/images/hero_card_2.webp';
import cardImg3 from '../../assets/images/hero_card_3.webp';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    const [menuOpen, setMenuOpen] = useState(false);
    const container = useRef(null);

    useGSAP(() => {
        // Safe character splitting to prevent double wrapping on re-renders / hot reloads
        const para = container.current.querySelector(".toptext");
        if (para && !para.dataset.split) {
            para.dataset.split = "true";
            const originalText = para.textContent;
            let clutter = "";
            originalText.split("").forEach(function (e) {
                clutter += `<span>${e}</span>`;
            });
            para.innerHTML = clutter;
        }

        gsap.set(".toptext span", { opacity: .1 });
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: true, // Quando o Lenis está ativo, usar 'true' evita o 'double-smoothing' (efeito pulo)
            },
            opacity: 1,
            stagger: .03,
        });

        let mm = gsap.matchMedia();

        // Setup initial scale
        gsap.set(".slidesm", { scale: 5 });

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            let { isMobile } = context.conditions;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true, // Substituído valores numéricos por true para casar com a suavidade extrema do Lenis
                }
            });

            tl.to(".vdodiv", {
                clipPath: 'circle(0% at 50% 50%)',
                ease: isMobile ? "power2.inOut" : "power4.inOut", // soft, elegant circle transition on mobile!
            }, "start");

            tl.to(".hero-overlay", {
                opacity: 0,
                yPercent: isMobile ? -10 : -20,
                pointerEvents: "none",
                ease: "power2.out",
                duration: 0.5,
            }, "start");

            tl.to(".slidesm", {
                scale: 1,
                ease: "power2.out",
            }, 'start');

            tl.to(".lft", {
                xPercent: isMobile ? -4 : -10, // contained sliding on mobile!
                stagger: .03,
                ease: "power4.out",
                duration: 1,
            }, 'start');

            tl.to(".rgt", {
                xPercent: isMobile ? 4 : 10,
                stagger: .03,
                ease: "power4.out",
                duration: 1,
            }, 'start');
        });

        return () => mm.revert();
    }, { scope: container })

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > 100) {
            if (latest > previous) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        } else {
            setHidden(false);
        }
    });

    return (
        <header ref={container} data-color="black" className="home section w-full h-[200vh] relative  ">
            {/* Mobile Menu Drawer Overlay */}
            <motion.div
                initial={false}
                animate={menuOpen ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full h-[100dvh] bg-[#060808]/98 z-[9990] flex flex-col justify-center px-10 pointer-events-auto"
            >
                <div className="flex flex-col gap-6 text-left">
                    {["Biologia", "Ciência", "Pesquisas", "Cientistas", "Clínicas"].map((item, index) => (
                        <motion.a
                            initial={{ x: -20, opacity: 0 }}
                            animate={menuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                            transition={{ delay: 0.1 * index + 0.1, duration: 0.3 }}
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="font-[SansitaBold] text-[4vh] text-white hover:text-[var(--blue)] transition-colors duration-300 uppercase tracking-widest py-3 px-4 -ml-4 rounded-lg"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <div className='w-full fixed top-0 left-0 z-[9999] pointer-events-none'>
                {/* navbar */}
                <motion.div
                    variants={{
                        visible: { y: 0, opacity: 1 },
                        hidden: { y: "-100%", opacity: 0 },
                    }}
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="navbar-container w-full px-6 sm:px-12 py-3 bg-transparent text-white pointer-events-auto mix-blend-difference"
                >
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                        <div className="logo cursor-pointer z-[9] flex items-center">
                            <h1 className="font-[SansitaBold] text-[4vh] tracking-widest text-white uppercase">
                                Aeterna
                            </h1>
                        </div>
                        <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer ">
                            {["Biologia", "Ciência", "Pesquisas", "Cientistas", "Clínicas"].map((item, index) => (
                                <h4 key={index} className={`${styles.links} h-[2.5vh] relative px-[2.2vh] text-center flex flex-col
                            font-[Sansita] text-[2.1vh] overflow-hidden font-medium leading-[2.5vh]`}>
                                    <a className={`atag ${styles.atag} relative`}>{item} </a>
                                    <a className={`atag ${styles.atag} relative`}>{item} </a>
                                </h4>
                            ))}
                        </div>

                        <div className="md:hidden z-[9999] cursor-pointer pointer-events-auto flex items-center">
                            {menuOpen ? (
                                <BiX
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl text-white hover:text-[var(--blue)] transition-colors duration-200 p-3 box-content -mr-3"
                                />
                            ) : (
                                <BiMenu
                                    onClick={() => setMenuOpen(true)}
                                    className="text-3xl text-white hover:text-[var(--blue)] transition-colors duration-200 p-3 box-content -mr-3"
                                />
                            )}
                        </div>


                    </div>
                </motion.div>
            </div>

            {/* Sticky wrapper to keep hero elements on screen while scrolling 200vh */}
            <div className="w-full h-[100dvh] sticky top-0 left-0 overflow-hidden">
                {/* hero content overlay */}
                <div className="hero-overlay absolute top-0 left-0 w-full h-[100dvh] z-[4] flex items-center justify-between px-6 sm:px-16 py-20 pointer-events-none">

                    {/* Dark gradient behind hero text for perfect legibility */}
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                    <div className="left-hero relative z-10 flex flex-col justify-center max-w-[650px] pointer-events-auto mt-16">
                        <h1 className="font-[SansitaBold] text-white text-[5.5vh] sm:text-[8vh] leading-[6.5vh] sm:leading-[9vh] uppercase tracking-tight mb-6">
                            BIOLOGIA DE <br className="hidden sm:block" />
                            <span className="text-[var(--blue)]">PRECISÃO</span> &amp; <br className="hidden sm:block" />
                            LONGEVIDADE
                        </h1>
                        <p className="font-[SansitaReg] text-zinc-300 text-[1.8vh] sm:text-[2.1vh] leading-[3vh] sm:leading-[3.5vh] mb-10 max-w-lg">
                            Engenharia genética pioneira, terapias celulares avançadas e reprogramação molecular de luxo para redefinir as fronteiras da vitalidade humana.
                        </p>

                        {/* Premium Hover Button */}
                        <a
                            href="#terapias"
                            className="group relative flex items-center justify-between pl-6 pr-2 py-2 border border-white/20 rounded-full text-white font-[Sansita] font-semibold text-[1.6vh] tracking-wider overflow-hidden w-[260px] h-[52px] backdrop-blur-sm hover:border-transparent transition-all duration-300 pointer-events-auto"
                        >
                            {/* Radial Hover Fill Bubble */}
                            <div className="absolute top-1/2 left-[calc(100%-1.65rem)] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--blue)] scale-1 group-hover:scale-[18] group-hover:left-1/2 transition-all duration-500 ease-out z-[1]"></div>

                            <span className="relative z-[2] group-hover:text-white transition-colors duration-300">
                                EXPLORAR TERAPIAS
                            </span>

                            <div className="relative z-[2] w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-transparent group-hover:text-white transition-all duration-300">
                                <LuArrowUpRight className="text-[2.4vh] transform group-hover:rotate-45 transition-transform duration-300" />
                            </div>
                        </a>
                    </div>

                    <div className="right-hero relative z-10 hidden xl:flex flex-row gap-6 items-end self-end mb-4 pointer-events-auto text-left">
                        {[
                            { img: cardImg2, title: "Reprogramação Molecular", subtitle: "Reversão celular ativa." },
                            { img: cardImg3, title: "Simulação Preditiva", subtitle: "Modelagem biológica por IA." }
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="group/card relative w-[220px] h-[180px] rounded-2xl overflow-hidden border border-white/20 hover:border-[var(--blue)] transition-all duration-300 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
                            >
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                <div className="absolute bottom-0 left-0 w-full p-5 font-[Sansita] text-white z-10">
                                    <h4 className="text-[2vh] font-bold tracking-tight mb-1 drop-shadow-md group-hover/card:text-white transition-colors duration-300">
                                        {card.title}
                                    </h4>
                                    <p className="text-[1.4vh] text-zinc-200 font-medium leading-relaxed drop-shadow-sm">
                                        {card.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* video div */}
                <div

                    className={` vdodiv w-full h-[100dvh] absolute z-[3] 
                top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}
                >
                    <img
                        className="absolute w-full h-[100dvh] object-cover top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
                        src={heroImg}
                        alt="Aeterna Longevity DNA"
                    />
                </div>

                {/* marquee div */}
                <div
                    className="marqueecontainer w-full h-[100dvh] 
                absolute top-0 left-0 overflow-hidden isolate z-[1]"
                >
                    {/* /* top Heading div */}
                    <div
                        className=' heading absolute  top-[12%] sm:top-[7%] left-1/2 
                    -translate-x-1/2 w-72'
                    >
                        <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center'>Desenvolvendo um novo horizonte de biologia celular, um que reprograma células para curar doenças genéticas.</h2>
                    </div>

                    <div

                        className='slidesm absolute scale-[5]  top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2 w-[90%]'
                    >
                        <div className='row'>
                            <Row
                                translateClass="-translate-x-1/2"
                                direction="lft"
                            />
                            <Row
                                translateClass="-translate-x-2/3"
                                direction="rgt"
                            />
                            <Row
                                translateClass="-translate-x-1/4"
                                direction="lft"
                            />
                            <Row
                                translateClass="-translate-x-1/3"
                                direction="rgt"
                            />
                        </div>

                    </div>
                </div>

                {/* Gradient mask OUTSIDE vdodiv to fix the clipping scroll issue */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[var(--black)] to-transparent z-[5] pointer-events-none"></div>
            </div>
        </header>
    )
}

export default Home
