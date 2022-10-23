import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

export function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState([])

  function submit() {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }
  return (
    <div className="mt-2">
      <form onSubmit={submit}>
        <Input
          placeholder="Nome do serviço"
          type="text"
          name="name"
          handleOnChange={handleChange}
        />
        <Input
          placeholder="Insira o valor total"
          type="number"
          name="coManager"
          handleOnChange={handleChange}
          className="mt-2"
        />
        <Input
          placeholder="Descrição do serviço"
          type="text"
          name="description"
          handleOnChange={handleChange}
          className="mt-2"
        />

        <SubmitButton text={btnText} />
      </form>
    </div>
  )
}
