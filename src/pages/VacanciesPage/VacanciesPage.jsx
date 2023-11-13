import React, { useEffect, useState } from 'react';
import styles from './VacanciesPage.module.scss'
import contentIcon1 from '../../assets/icons/content-icon-1.svg'
import contentIcon2 from '../../assets/icons/content-icon-2.svg'
import VanaciesCard from '../../components/VanaciesCard/VanaciesCard';
import { API } from '../../api';
const VanaciesPage = () => {

const  [vanaciesList,setVanaciesList] = useState([])
  const getEvents = () => {
    fetch('https://cf-envision.com.kg/api/vacancies/')
      .then((response) => response.json())
      .then((data) => {
        setVanaciesList(data)
        console.log(vanaciesList)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
   getEvents()
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
          {vanaciesList.map((item) => (
            <VanaciesCard key={item.id}
              title={item.title}
              choices={item.choices}
              text={item.text}
            />
          ))}
        </section>
      </div>
    </main>
  )
};

export default VanaciesPage;