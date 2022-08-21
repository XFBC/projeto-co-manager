import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import ProjetoCard from '../projeto/ProjetoCard'

export default function Projetos() {
  const location = useLocation()

  let message = ''
  if (location.state) {
    message = location.state.message
  }
  //state GET
  const [projects, setProjects] = useState([])
  const [projectMessage, setProjectMessage] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setProjects(data)
      })

      .catch(err => console.log(err))
  }, [])

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setProjects(projects.filter(project => project.id !== id))
        // mensagem de remoção
        setProjectMessage('Projeto removido com sucesso')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1 className="text-3xl pb-2">Meus Projetos</h1>

      <div className="text-green-600 pb-6">
        {message && <Message menssage="Cadastrado com sucesso" />}
        {projectMessage && <Message menssage="Projeto removido" />}
      </div>

      <LinkButton to="/novoprojeto" text="Criar projeto" />

      <div>
        {projects.length > 0 &&
          projects.map(project => (
            <ProjetoCard
              name={project.name}
              budget={project.budget}
              id={project.id}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
      </div>
    </div>
  )
}
