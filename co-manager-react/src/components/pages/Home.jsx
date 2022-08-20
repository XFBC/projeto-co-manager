import LinkButton from '../layout/LinkButton'

export default function Home() {
  return (
    <div>
      <section className="w-full">
        <h1 className="text-3xl"> Bem vindo ao Co-Manager</h1>
        <p className="pb-2">Comece a gerenciar seus projetos agora mesmo</p>
        <LinkButton to="/novoprojeto" text="Criar projeto" />
      </section>
    </div>
  )
}
