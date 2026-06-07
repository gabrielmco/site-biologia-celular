import './App.css'
import Capsule from './components/Capsule/Index'
import Craft from './components/Craft/Index'
import { useEffect } from 'react';
import Home from './components/Home/Index'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Para from './components/Paragraph/Index'
import Para2 from './components/Paragraph2/Index'
import Real from './components/Real/Index'
import Team from './components/Team/Index'
import Lenis from 'lenis';
import { gsap } from "gsap";
import Footer from './components/Footer/Index';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Inicializar o Lenis com parâmetros de nível "Awwwards" (lento, pesado, luxuoso)
    const lenis = new Lenis({
      lerp: 0.05,             // Muito suave (efeito flutuante)
      wheelMultiplier: 0.5,   // Reduz agressivamente o impacto da roda do mouse para não "pular" seções
      smoothWheel: true,      
      smoothTouch: false,     // Nativo no mobile para evitar conflitos de touch
    });

    // Sincronizar o Lenis com o ScrollTrigger (Essencial para não haver desalinhamento)
    lenis.on('scroll', ScrollTrigger.update);

    // O ticker do GSAP assume o controle do RAF do Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Forçar atualização do ScrollTrigger após a montagem do DOM para evitar desalinhamentos de start/end
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // Limpeza
    return () => {
      clearTimeout(timeout);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useGSAP(() => {
    const list = document.querySelectorAll('.section');
    list.forEach(function(e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function(){
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function() {
          document.body.setAttribute("theme", e.dataset.color);
        }
      });
    });

    // ScrollTrigger to reveal the Transition Section beautifully
    const transTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trans-section",
        start: "top 85%",
        end: "bottom 40%",
        scrub: 0.5,
      }
    });
    transTl.from(".trans-title", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".trans-p", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from(".trans-badges", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");
  }, []);

  return (
    <main className='section main w-full'>
      <Home  />
      
      {/* Transition Section */}
      <section data-color="cyan" className="trans-section section w-full py-32 sm:py-48 flex flex-col items-center justify-center bg-[var(--cyan)] px-6 sm:px-12">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center z-10">
          <h1 className="trans-title text-white text-[5vh] sm:text-[8vh] font-[SansitaReg] leading-[1.1] mb-8">
            Transcendendo os limites biológicos.
          </h1>
          <p className="trans-p text-zinc-300 font-[SansitaReg] text-[2.2vh] sm:text-[2.6vh] leading-relaxed max-w-3xl mb-12">
            Nossa abordagem integra modelagem preditiva avançada e engenharia de precisão para redesenhar o futuro da saúde celular, conectando você ao estado da arte em biotecnologia.
          </p>
          <div className="trans-badges flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 sm:w-16 h-[2px] bg-white/30"></div>
              <span className="font-[Sansita] tracking-widest uppercase text-[1.6vh]">Inovação Contínua</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-4 text-white">
              <span className="font-[Sansita] tracking-widest uppercase text-[1.6vh]">Precisão Genética</span>
              <div className="w-12 sm:w-16 h-[2px] bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

      <Craft />
      <Real />
      <Team  />
      <Para  />
      <Para2 />
      <Capsule />
      <Footer />
    </main>    
  )
}

export default App;
