import styles from './slide.module.css'
import { useState, useEffect } from 'react'

interface Prop {
  delay: number
  label: string
  timeOut: number
}

export const Slide = ({
  delay = 0.06,
  label = 'TEXT ANIMATION',
  timeOut = 1500,
}: Prop) => {
  const arr = Array.from(label)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, timeOut)
    }, timeOut * 2)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <h1
      className={`${styles.title} ${visible ? styles.visible : ''}`}
      style={{ '--delay': `${delay}s` } as React.CSSProperties}
    >
      {[...arr].map((value, index) => (
        <span
          key={index}
          style={{ '--i': index + 1 } as React.CSSProperties}
        >
          {value}
        </span>
      ))}
    </h1>
  )
}
