import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjetoForm from '../projeto/ProjetoForm'

export default function Projeto() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setProject(data)
      })

      .catch(err => console.log(err))
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function editPost(project) {
    //budget validation

    if (project.budget < project.coManager) {
      //msg
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify(project)
    })
      .then(r => r.json())
      .then(data => {
        setProject(data)
        setShowProjectForm(false)
      })
  }

  return (
    <div>
      <h1 className="text-2xl">Projeto: {project.name}</h1>
      <button
        className='border-yellow-400 border-x-2 border-y-2 px-2 py-2"'
        onClick={toggleProjectForm}
      >
        {!showProjectForm ? 'Editar projeto' : 'Fechar'}
      </button>

      {!showProjectForm ? (
        <>
          <p>Categoria: {project.category && project.category.name} </p>
          <p>Budget: {project.budget}</p>
          <p>Total ultilizado: R$ {project.coManager}</p>
        </>
      ) : (
        <>
          <ProjetoForm
            handleSubmit={editPost}
            btnText="atualizar projeto"
            projectData={project}
          />
        </>
      )}
    </div>
  )
}
