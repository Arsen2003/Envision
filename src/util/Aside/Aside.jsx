import React, { useRef, useEffect } from 'react'
import styles from './Aside.module.scss'
import contentIcon1 from '../../assets/icons/content-icon-1.svg'
import contentIcon2 from '../../assets/icons/content-icon-2.svg'
import closeIcon from '../../assets/icons/close-icon.svg'
import { Link, useLocation } from 'react-router-dom'
const Aside = ({ showAside, changeShowAside }) => {
  const location = useLocation()

useEffect(() => {
  if (showAside) {
    changeShowAside()
  }
}, [location.pathname])


  return (
    <aside
      className={`${styles.aside} ${showAside === true ? styles.active : ''}`}
    >
      <div className={styles.close}>
        <button onClick={() => changeShowAside()}>
          <img src={closeIcon} alt="closeIcon" />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.images}>
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
        </div>
        <nav className={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/vacancies">Вакансии</Link>
          <Link to="/financial-report">Финансовый отчет</Link>
          <Link to="/requisites">Реквизиты</Link>
        </nav>
        <div className={styles.images}>
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
          <img src={contentIcon1} alt="content-icon" />
          <img src={contentIcon2} alt="content-icon" />
        </div>
      </div>
    </aside>
  )
}

export default Aside;