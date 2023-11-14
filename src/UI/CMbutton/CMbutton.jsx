import React from 'react';
import styles from './CMbutton.module.scss'
const CMbutton = ({children}) => {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  )
};

export default CMbutton;