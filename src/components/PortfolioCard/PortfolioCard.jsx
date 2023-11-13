import React from 'react';
import styles from './PortfolioCard.module.scss'
const  PortfolioCard = ({title,image,text}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt="card-image" />
      </div>
      <div className={styles.card__content}>
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  )
};

export default PortfolioCard;