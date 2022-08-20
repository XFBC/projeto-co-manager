import { useLocation } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'

export default function Projetos() {
  const location = useLocation()

  let message = ''
  if (location.state) {
    message = location.state.message
  }
  return (
    <div>
      <h1 className="text-3xl pb-2">Meus Projetos</h1>

      <div className="text-green-600">
        {message && <Message menssage="Enviado com sucesso" />}
      </div>

      <LinkButton to="/novoprojeto" text="Criar projeto" />
    </div>
  )
}
