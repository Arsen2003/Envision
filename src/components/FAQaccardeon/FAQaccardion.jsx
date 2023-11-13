import React, { useState } from 'react'
import styles from './FAQaccardion.module.scss'
import faqArrowIcon from '../../assets/icons/faq-arrow-icon.svg'

const FAQaccardion = ({ answer, question }) => {
  const [activeAcc, setActiveAcc] = useState(false)

  return (
    <button
      onClick={() => setActiveAcc(!activeAcc)}
      className={`${styles.accardion} ${activeAcc ? styles.active : ''}`}
    >
      <span>
        {question} <img src={faqArrowIcon} alt="faq-arrow-icon " />
      </span>
      <p>{answer}</p>
    </button>
  )
}

export default FAQaccardion
