import React from 'react'
import styles from './Cbutton.module.scss'

const Cbutton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Cbutton
