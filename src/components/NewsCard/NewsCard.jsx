import React from 'react';
import styles from './NewsCard.module.scss'
const NewsCard = ({title,image,text}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt="news-image" />
      </div>
      <div className={styles.card__content}>
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  )
};

export default NewsCard;