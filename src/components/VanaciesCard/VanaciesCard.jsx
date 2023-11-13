import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VanaciesCard.module.scss'
import Cbutton from '../../UI/Cbutton/Cbutton';
import geoIcon from '../../assets/icons/geolocation-icon.svg'
import phoneIcon from '../../assets/icons/phone-icon.svg'
const VanaciesCard = ({ id, title, choices, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.card_top__title}>
          <h3>Волонтер</h3>
          <span>{title}</span>
        </div>
      </div>
      <p>
        {text}
      </p>
      <address>
        <Cbutton>Откликнуться</Cbutton>
        <div>
          <Link>
            <img src={geoIcon} alt="geo-icon" />
            10 просп. Эркиндик, Бишкек
          </Link>
          <Link tel="">
            <img src={phoneIcon} alt="phone-icon" />
            +996777996777
          </Link>
        </div>
      </address>
    </div>
  )

}

export default VanaciesCard;