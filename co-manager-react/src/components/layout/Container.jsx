export default function Container({ children }) {
  return (
    <div className="container min-h-[75%] px-2 d-flex justify-between m-auto  flex-wrap bg-slate-300  w-full">
      {children}
    </div>
  )
}
