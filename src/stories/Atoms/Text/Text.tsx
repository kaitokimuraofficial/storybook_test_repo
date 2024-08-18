import styles from './text.module.css'

export const Text = ({}) => {
  return (
    <p style={{ width: '80%' }}>
      Lorem ipsum dolor sit amet,{' '}
      <span className={styles.highlight}>consectetur adipiscing elit</span>, sed
      do eiusmod tempor incididunt ut labore et{' '}
      <span className={styles.highlight}>dolore magna aliqua</span>. Ut enim ad
      minim veniam, quis{' '}
      <span className={styles.highlight}>nostrud exercitation</span> ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat{' '}
      <span className={styles.highlight}>cupidatat non proident</span>, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
}
