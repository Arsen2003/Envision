  import React, { useState } from 'react'
  import styles from './Header.module.scss'
  import { Link, useLocation, useNavigate } from 'react-router-dom'
  import logoIcon from '../../assets/images/logo-icon.svg'
  import Cbutton from '../../UI/Cbutton/Cbutton'
  import walletIcon from '../../assets/icons/wallet-icon.svg'
  import Aside from '../Aside/Aside'

  const Header = () => {
    const navigate = useNavigate()
    const [showAside, setShowAside] = useState(false)
    const location = useLocation()
    const changeAside = () => {
      setShowAside(!showAside)
    }

    return (
      <header
        className={`${styles.header} ${
          location.pathname !== '/' ? styles.dark_theme : ''
        }`}
      >
        <div className="container">
          <div className={styles.content}>
            <Link to="/" className={styles.content__logo}>
              <img src={logoIcon} alt="logo-image" />
            </Link>
            <nav>
              <Link to="/">Главная</Link>
              <Link to="/portfolio">Портфолио</Link>
              <Link to="/vacancies">Вакансии</Link>
              <Link to="/financial-report">Финансовый отчет</Link>
            </nav>
            <div className={styles.content__button}>
              <Cbutton onClick={() => navigate('/requisites')}>
                Реквизиты
              </Cbutton>
            </div>
            <div className={styles.demo_aside}>
              <Link to="/requisites">
                <img src={walletIcon} alt="wallet-icon" />
                Реквизиты
              </Link>
              <button onClick={() => changeAside()}>
                <div>
                  <span></span>
                </div>
                <div>
                  <span></span>
                </div>
                <div>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Aside showAside={showAside} changeShowAside={changeAside} />
      </header>
    )
  }

  export default Header
