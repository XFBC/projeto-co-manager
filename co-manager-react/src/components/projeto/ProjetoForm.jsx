import { useEffect } from 'react'
import { useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

export default function ProjetoForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      Headers: {
        'Content-Type:': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => console.log(err))
  }, [])

  const submit = e => {
    e.preventDefault()
    // console.log(project)
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
    // console.log(project)
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <div className="pt-2">
      <form className="flex flex-col gap-2 max-w-[30%]" onSubmit={submit}>
        <Input
          placeholder="insira o nome do projeto"
          type="text"
          name="name"
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
        />

        <Input
          type="number"
          placeholder="orçamento do projeto"
          name="budget"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ''}
        />

        <Select
          name="categogy_id"
          text="seleciona uma categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />

        <SubmitButton text={btnText} />
      </form>
    </div>
  )
}
