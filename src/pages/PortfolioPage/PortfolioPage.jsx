import React, { useState, useEffect, useLayoutEffect } from 'react'
import styles from './PortfolioPage.module.scss'
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard'
import portfolioImage from '../../assets/images/portfolio-about-image.png'
import { Bars } from 'react-loader-spinner'
import {API} from '../../api/index'

const PortfolioPape = () => {
const [portfolioList,setPortfolioList] = useState([])
const [loading,setLoading] = useState(false)
useEffect(() => {
function fetchData() {
  fetch(`${API}/portfolio-items/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      setPortfolioList(data)
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      setLoading(false)
    })
}
fetchData();
}, [])




  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <div>
          <h2>ENViSION</h2>
          <p>
            Мы - молодая, некоммерческая и благотворительная организация,
            которая была учреждена в 2023 году совместными усилиями 10
            соучредителей, людей, разделяющих общие ценности и миссию. Наша
            неприкосновенное стремление - прийти на помощь нуждающимся слоям
            населения Кыргызстана.
          </p>
        </div>
        <img src={portfolioImage} alt="portfolio-image" />
      </section>
      <section className={styles.portfolio}>
        <div className="container">
          <div className={styles.portfolio__content}>
            <h3>Портфолио</h3>
            <div className={styles.portfolio__list}>

              {
                loading ? (
                    <Bars
                    height="100"
                    width="100"
                    color="white"
                    ariaLabel="bars-loading"
                    wrapperClass={styles.loading}
                    visible={true}
                  />
                ) : (
                portfolioList.map((item) => (
                <PortfolioCard
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                />
                 ))
                )
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default PortfolioPape;