export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value
}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}
