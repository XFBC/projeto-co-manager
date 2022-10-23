export default function Container({ children }) {
  return (
    <div className="container px-5 pt-20 lg:px-16 d-flex justify-between m-auto flex-wrap w-full min-h-[75vh]">
      {children}
    </div>
  )
}
