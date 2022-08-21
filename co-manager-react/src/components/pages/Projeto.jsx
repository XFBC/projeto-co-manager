import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Projeto() {
  const { id } = useParams()
  const [projeto, setProjeto] = useState()

  useEffect(() => {
    fetch(`http://localhost:5000/projects/` + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setProjeto(data)
      })

      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <h1 className="text-2xl">Projeto: {}  </h1>
      <button>Editar projeto</button>
    </div>
  )
}
