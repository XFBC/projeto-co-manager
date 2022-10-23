import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjetoForm from '../projeto/ProjetoForm'
import { ServiceForm } from '../service/ServiceForm'
import { parse, v4 as uuidv4 } from 'uuid'

export default function Projeto() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [services,setServices] = useState('')

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

  //  ------------------

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }
  //  ------------------

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

  //  ------------------
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  // ---------------------

  function createService(project) {
    const lastService = project.service[project.service.length - 1]
    lastService.id = uuidv4()

    const lastServiceCoManager = lastService.coManager

    const newCoManager =
      parseFloat(project.coManager) + parseFloat(lastServiceCoManager)

    if (newCoManager > parseFloat(project.budget)) {
      alert('orçamento ultrapassado')

      project.service.pop()
      return false
    }

    project.coManager = newCoManager

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(r => r.json())
      .then(data => {
        setServices(data.services)
        // setShowServiceForm(!showServiceForm)
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1 className="text-2xl">Projeto: {project.name}</h1>
      <button
        className="border-yellow-400 border-x-2 border-y-2 px-2 py-2"
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

      <div className=" border-t-2 border-t-orange-300 pt-5 ">
        <p>Adicione um serviço:</p>

        <button
          onClick={toggleServiceForm}
          className="border-yellow-400 border-x-2 border-y-2 px-2 py-2"
        >
          {!showServiceForm ? 'Adicionar serviço' : 'fechar'}
        </button>

        <div>
          {showServiceForm && (
            <ServiceForm
              handleSubmit={createService}
              projectData={project}
              btnText="Adicionar serviço"
            />
          )}
        </div>

        <div className="mt-20 border-t-2 border-t-orange-300">
          <p>serviços</p>
        </div>
      </div>
    </div>
  )
}
