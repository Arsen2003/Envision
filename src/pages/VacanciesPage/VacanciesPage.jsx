import React, { useEffect, useState } from 'react'
import styles from './VacanciesPage.module.scss'
import contentIcon1 from '../../assets/icons/content-icon-1.svg'
import contentIcon2 from '../../assets/icons/content-icon-2.svg'
import VanaciesCard from '../../components/VanaciesCard/VanaciesCard'
import { Bars } from 'react-loader-spinner'
import { API } from '../../api'

const VanaciesPage = () => {
  const [vanaciesList, setVanaciesList] = useState([])
  const [loading, setLoading] = useState(true)

  const getVacancies = () => {
    fetch(`${API}/vacancies/`)
      .then((response) => response.json())
      .then((data) => {
        setVanaciesList(data)
        setLoading(false) 
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    getVacancies()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <div>

          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
        </div>
        <h1>Вакансии</h1>
        <div>
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
        </div>
      </div>
      <div className="container">
        <section className={styles.vanacies}>
          {loading ? (
            <Bars
              height="100"
              width="100"
              color="white"
              ariaLabel="bars-loading"
              wrapperClass={styles.loading}
              visible={true}
            />
          ) : (
            vanaciesList.map((item) => (
              <VanaciesCard
                key={item.id}
                id={item.id}
                title={item.title}
                choices={item.choices}
                text={item.text}
              />
            ))
          )}
        </section>
      </div>
    </main>
  )
}

export default VanaciesPage
