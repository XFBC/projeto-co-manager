export default function SubmitButton({ text }) {
  return (
    <div>
      <button className="border-yellow-400 border-x-2 border-y-2 px-2 py-2 transition-.5s">
        {text}
      </button>
    </div>
  )
}
