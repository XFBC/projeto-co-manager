import { useEffect } from 'react'
import { useState } from 'react'

export default function Message({ type, menssage }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!menssage) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [menssage])

  return <div>{visible && <span>{menssage}</span>}</div>
}
