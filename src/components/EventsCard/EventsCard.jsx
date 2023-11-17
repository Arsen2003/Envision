import React from 'react'
import styles from './EventsCard.module.scss'
import Cbutton from '../../UI/Cbutton/Cbutton'
import TimerIcon from '../../assets/icons/timer-icon.svg'
import GeolocationIcon from '../../assets/icons/geolocation-icon.svg'


const formatDateTime = (dateTime) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }
  return new Date(dateTime).toLocaleString('ru-RU', options)
}



const EventsCard = ({ title, image, text, location, date, link }) => {




  const formattedDate = formatDateTime(date)

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt="card-image" />
      </div>
      <span>{title}</span>
      <p>{text}</p>
      <div className={styles.card__info}>
        <div>
          <span>
            <img src={TimerIcon} alt="timer-icon" />
            {formattedDate}
          </span>
          <span>
            <img src={GeolocationIcon} alt="geolocation-icon" />
            {location}
          </span>
        </div>
        <Cbutton onClick={() => window.location.assign(link)}>
          Подать
        </Cbutton>
      </div>
    </div>
  )
}

export default EventsCard
