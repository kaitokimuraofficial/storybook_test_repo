import styles from './textAnimation.module.css'
import { useState, useEffect } from 'react'

interface Prop {
  timeOut: number
  str: String
  gap: number
}

export const TextAnimation = ({
  timeOut = 1500,
  str = 'TEXT ANIMATION',
  gap = 0.06,
}: Prop) => {
  const arr = Array.from(str)
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
      style={{ '--gap': `${gap}s` } as React.CSSProperties}
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
