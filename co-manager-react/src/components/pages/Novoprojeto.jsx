import ProjetoForm from '../projeto/ProjetoForm'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Novoprojeto() {
  const Navigate = useNavigate()

  function createPost(project) {
    //inicio

    project.coManager = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)

        //redirect
        Navigate('/projetos', {
          state: { message: 'projeto criado com sucesso' }
        })
      })
  }

  return (
    <div>
      <h1 className="text-3xl"> Criar projeto</h1>
      <p> Crie seu projeto depois adicione os serviços</p>

      <ProjetoForm handleSubmit={createPost} btnText="criar projeto" />
    </div>
  )
}
