import { useEffect, useState } from 'react'
import styles from './slide.module.css'

interface Prop {
  timeOut: number
}

export const Slide = ({ timeOut }: Prop) => {
  const [bgVisible, setBgVisible] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgVisible(true)
      setTimeout(() => {
        setBgVisible(false)
      }, timeOut)
    }, timeOut * 2)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={`${styles.bg} ${bgVisible ? styles.visible : ''}`}>
      <span className={`${styles.title}`}>
        <span>ANIMATION</span>
        <span>BACKGROUND</span>
      </span>
    </div>
  )
}
