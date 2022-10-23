import { Link } from 'react-router-dom'
import { BsPencil, BsTrash } from 'react-icons/bs'

export default function ProjetoCard({
  id,
  name,
  budget,
  category,
  handleRemove
}) {
  const remove = e => {
    e.preventDefault()
    handleRemove(id)
  }
  return (
    <div>
      <div className="mt-2 border-gray-700 border-x-2 border-y-2 px-2 py-2 rounded-md">
        <h2 className="text-xl font-normal"> {name}</h2>
        <p>Orçamento: R$ {budget}</p>
        <p> {category}</p>
        <div className="flex flex-row gap-2">
          <div>
            <Link to={`/projeto/${id}`}>
              {' '}
              <BsPencil /> Editar
            </Link>
          </div>
          <div>
            <button onClick={remove}>
              {' '}
              <BsTrash />
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
