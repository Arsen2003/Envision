import React from 'react';
import styles from './Footer.module.scss'
import logoIcon from '../../assets/images/logo-icon.svg'
import { Link } from 'react-router-dom';
import whatsAppIcon from '../../assets/icons/whatsApp-icon.svg'
import instargamIcon from '../../assets/icons/instagram-icon.svg'
import emailIcon from '../../assets/icons/email-icon.svg'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <Link>
            <img src={logoIcon} alt="logo-image" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/portfolio">Портфолио</Link>
              </li>
              <li>
                <Link to="/financial-report">Финансовый отчет</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/"  >FAQ</Link>
              </li>
              <li>
                <Link>Реквизиты</Link>
              </li>
              <li>
                <Link to="/vacancies">Вакансии</Link>
              </li>
            </ul>
            <ul>
              <li>
                <img src={whatsAppIcon} alt="whatsApp-icon" />
                <Link>+996 777 996 777</Link>
              </li>
              <li>
                <img src={instargamIcon} alt="instagram-icon" />
                <Link>envision.bishkek</Link>
              </li>
              <li>
                <img src={emailIcon} alt="email-icon" />
                <Link>fghj@ghjkl</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
};

export default Footer;