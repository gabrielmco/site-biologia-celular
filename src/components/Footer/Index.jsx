import styles from './Style.module.css';
import { LuArrowUpRight } from "react-icons/lu";
import Button from '../Button';

function Footer() {
  return (
    <div className="section w-full mt-16 md:mt-30">
      <div className="topfoot bg-[var(--blue)] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="left w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
          <div className="first font-[SansitaReg] text-[5vh] leading-[6vh] md:text-[4.2rem] w-full md:w-[80%] md:leading-[5rem] mb-6 md:mb-10">
            <h1 className="whitespace-normal">Descubra a Aeterna.</h1>
          </div>
          
          <div className="middle mt-4 px-8 py-4 bg-white text-[var(--blue)] w-fit rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer">
            <div className={`${styles.masker} flex items-center gap-2 overflow-hidden relative`}>
              <span className={`${styles.spanMask} font-[Sansita] text-[2.1vh] capitalize tracking-normal font-semibold`}>
                VAMOS COMEÇAR
              </span>
              <LuArrowUpRight 
                style={{
                  fontSize: "24px", 
                  color: "var(--blue)", 
                }} 
                className={`${styles.iconMask}`} 
              /> 
            </div>
          </div>
        </div>

        <div className="right w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-10">
          <div className="rght1 w-full md:w-2/3 flex flex-col items-center md:items-start mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-lg md:text-[1.3rem] font-[Sansita] font-medium leading-relaxed opacity-90">
              Descubra como a biotecnologia de precisão e a ciência de longevidade da Aeterna podem expandir o potencial da sua vida saudável.
            </h3>
          </div>
          <div className="hidden md:inline-block rght2 relative w-[150px] h-[150px] overflow-hidden">
            <div className={`${styles.loopFoot}`}></div>
            <div className="icon w-[120px] h-[120px] rounded-full border-white border-[1px] px-10 py-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden">
              <div className="w-10 h-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="white" strokeWidth="2"></path>
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="white" strokeWidth="2"></path>
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="downfoot w-full h-fit bg-[var(--black)] px-6 md:px-12 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4">
          <div className="hidden md:inline-block space-y-4">
            {["Início", "Biologia", "Ciência", "Cientistas", "Contato"].map((item, index) => {
              return (
                <div key={index} className="pb-1 hover:text-[var(--salmon)] transition-colors duration-200 cursor-pointer">
                  <h3 className="font-[SansitaReg] text-lg text-white/80 font-medium">
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-white pb-6 font-[SansitaReg] text-xl md:text-2xl font-semibold max-w-xl leading-snug">
              Inscreva-se em nossa newsletter de ciência para as últimas descobertas.
            </h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full mt-4">
              <input 
                type="email" 
                placeholder="Digite seu endereço de e-mail" 
                className="bg-white/5 w-full md:w-[350px] h-[52px] px-6 text-sm text-white placeholder-white/40 border border-white/10 rounded-full focus:outline-none focus:border-[var(--salmon)] transition-colors duration-300"
              />
              <div className="flex justify-center">
                <Button text="INSCREVER-SE" bgColor="bg-[var(--blue)]" textColor="text-white" iconColor="white" />
              </div>
            </div>
          </div>
          
          <div className="hidden md:inline-block space-y-4">
            {["Pesquisas", "Sala de Imprensa", "Recursos", "Clínicas", "Contato"].map((item, index) => {
              return (
                <div key={index} className="pb-1 hover:text-[var(--salmon)] transition-colors duration-200 cursor-pointer">
                  <h3 className="font-[SansitaReg] text-lg text-white/80 font-medium">
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Footer;
