  import React, { useState } from 'react'
  import styles from './VanaciesCard.module.scss'
  import Cbutton from '../../UI/Cbutton/Cbutton'
  import ArrowIcon from '../../assets/icons/faq-arrow-icon.svg'
  import phoneIcon from '../../assets/icons/phone-icon.svg'
  import { API } from '../../api'
  const VanaciesCard = ({ id, title, choices, text }) => {
    const [activeCard, setActiveCard] = useState(false)
    const [jobForm, setJobForm] = useState({
      id: Date.now(),
      full_name: '',
      years_of_experience: '',
      email: '',
      phone_number: "",
      vacancy: id,
    })

    const handleInputChange = (e, fieldName) => {
      setJobForm((prev) => ({
        ...prev,
        [fieldName]: e.target.value,
      }))
    }

    const postJob = async () => {
      try {
        const response = await fetch(`${API}/job-applications/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobForm),
        })

        if (!response.ok) {

          throw new Error(response)
        }

        const data = await response.json()

        setActiveCard(!activeCard)
      } catch (error) {
        console.error('Error submitting job application:')

      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      await postJob()
    }

    return (
      <div className={`${styles.card} ${activeCard ? styles.active : ''}`}>
        <div className={styles.card_top}>
          <div className={styles.card_top__title}>
            <h3>{title}</h3>
            <span>{choices}</span>
          </div>
        </div>
        <p>{text}</p>
        <address>
          <a href="tel: +996777996777">
            <img src={phoneIcon} alt="phone-icon" />
            +996777996777
          </a>
          <button
            onClick={() => {
              setActiveCard(!activeCard)
            }}
          >
            подать
            <img src={ArrowIcon} alt="arrow-icon" />
          </button>
        </address>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Ваше имя</span>
            <input
              onChange={(e) => handleInputChange(e, 'full_name')}
              value={jobForm.full_name}
              placeholder="Джони Депп"
              type="text"
            />
          </label>
          <label>
            <span>Ваша почта</span>
            <input
              onChange={(e) => handleInputChange(e, 'email')}
              value={jobForm.email}
              placeholder="ktototam@mail.ru"
              type="email"
            />
          </label>
          <label>
            <span>Ваш опыт</span>
            <input
              onChange={(e) => handleInputChange(e, 'years_of_experience')}
              value={jobForm.years_of_experience}
              placeholder="100 лет"
              type="text"
            />
          </label>
          <label>
            <span>Ваш сотовый номер</span>
            <input
              onChange={(e) => handleInputChange(e, 'phone_number')}
              value={jobForm.phone_number}
              placeholder="+996707228228"
              type="number"
            />
          </label>
          <Cbutton type="submit">Откликнуться</Cbutton>
        </form>
      </div>
    )
  }

  export default VanaciesCard
