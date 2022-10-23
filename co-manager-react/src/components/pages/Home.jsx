import LinkButton from '../layout/LinkButton'
import Bg from '../../assets/img/home-bg.png'
import Container from '../layout/Container'

export default function Home() {
  return (
    <div>
      <section className="w-full">
        <h1 className="md:text-4xl text-2xl"> Bem vindo ao Co-Manager</h1>
        <p className="pb-2">Comece a gerenciar seus projetos agora mesmo</p>
        <LinkButton to="/novoprojeto" text="Criar projeto" />

        <div className="grid justify-center mt-5">
          {/* <img src={Bg} alt="#" className='w-[60%]' /> */}
        </div>
      </section>
    </div>
  )
}
