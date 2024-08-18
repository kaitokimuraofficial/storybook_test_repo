import styles from './slide.module.css'
import { useEffect, useState } from 'react'

interface Prop {
  delay: number
  label: string
  timeOut: number
}

export const Slide = ({
  delay = 100,
  label = 'TEXT ANIMATION',
  timeOut = 1500,
}: Prop) => {
  const arr = Array.from(label)
  const [titleVisible, setTitleVisible] = useState(false)
  const [sentenceVisible, setSentenceVisible] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleVisible(true)
      setTimeout(() => {
        setSentenceVisible(true)
      }, delay)

      setTimeout(() => {
        setTitleVisible(false)
        setTimeout(() => {
          setSentenceVisible(false)
        }, delay)
      }, timeOut)
    }, timeOut * 2)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={`${styles.text}`}>
      <h1 className={`${styles.title} ${titleVisible ? styles.visible : ''}`}>
        <span>{arr}</span>
      </h1>
      <p
        className={`${styles.sentence} ${sentenceVisible ? styles.visible : ''}`}
      >
        <span>
          Here is explanation.
          <br />
          Supporting multiple lines!
        </span>
      </p>
    </div>
  )
}
