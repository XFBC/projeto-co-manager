export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  className,
}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        className={className}
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
