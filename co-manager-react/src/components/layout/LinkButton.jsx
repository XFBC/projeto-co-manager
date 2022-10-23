import { Link } from 'react-router-dom'

export default function LinkButton({ to, text }) {
  return (
    <div>
      <Link className="btn btn-accent" to={to}>
        {text}
      </Link>
    </div>
  )
}
