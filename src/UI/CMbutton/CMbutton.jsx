import React from 'react';
import styles from './CMbutton.module.scss'
const CMbutton = ({children,onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{children}</span>
    </button>
  )
};

export default CMbutton;