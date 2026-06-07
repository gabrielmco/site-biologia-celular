import List from "../List"
import Button from "../Button"



function Team() {

  return (
    <div  data-color="white" className='team section font-[SansitaReg] py-20'>
      <div className="head1">
        <h1 className="text-5xl sm:text-6xl text-center tracking-tight">
          Junta Científica
        </h1>
      </div>
      <div className="list mt-10 w-full px-8">
        {/* //single list */}
        <List />
        <div className='flex items-center justify-center py-20'>
          <Button bgColor="bg-[var(--blue)]" text="CONHEÇA OS CIENTISTAS" textColor="text-white" iconColor="white" />
        </div>
      </div>
    </div>
  )
}

export default Team
