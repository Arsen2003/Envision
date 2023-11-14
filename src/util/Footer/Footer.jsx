import React from 'react';
import styles from './Footer.module.scss'
import logoIcon from '../../assets/images/logo-icon.svg'
import { Link, useLocation } from 'react-router-dom'
import whatsAppIcon from '../../assets/icons/whatsApp-icon.svg'
import instargamIcon from '../../assets/icons/instagram-icon.svg'
import emailIcon from '../../assets/icons/email-icon.svg'
const Footer = () => {

      const location = useLocation()
  return (
    <footer
      className={`${styles.footer} ${
        location.pathname !== '/' ? styles.dark_theme : ''
      }`}
    >
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
                <Link to="/">FAQ</Link>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <path
                    d="M14.0026 2.83325C20.4461 2.83325 25.6693 8.05642 25.6693 14.4999C25.6693 20.9434 20.4461 26.1666 14.0026 26.1666C11.9409 26.1699 9.91539 25.6243 8.13429 24.5858L2.34062 26.1666L3.91795 20.3706C2.87856 18.5889 2.33251 16.5626 2.33595 14.4999C2.33595 8.05642 7.55912 2.83325 14.0026 2.83325ZM10.0266 9.01659L9.79329 9.02592C9.64223 9.03512 9.4946 9.0748 9.35929 9.14259C9.23273 9.21425 9.1172 9.30385 9.01629 9.40859C8.87629 9.54042 8.79695 9.65475 8.71179 9.76558C8.28026 10.3266 8.04792 11.0155 8.05145 11.7233C8.05379 12.2949 8.20312 12.8514 8.43645 13.3718C8.91362 14.4241 9.69879 15.5383 10.7348 16.5708C10.9845 16.8193 11.2295 17.0689 11.4931 17.3011C12.7804 18.4345 14.3144 19.2518 15.9731 19.6881L16.6358 19.7896C16.8516 19.8013 17.0675 19.7849 17.2845 19.7744C17.6242 19.7569 17.956 19.6649 18.2563 19.5049C18.4091 19.4262 18.5582 19.3406 18.7031 19.2483C18.7031 19.2483 18.7533 19.2156 18.849 19.1433C19.0065 19.0266 19.1033 18.9438 19.234 18.8073C19.3308 18.7069 19.4148 18.5891 19.479 18.4549C19.57 18.2648 19.661 17.9019 19.6983 17.5998C19.7263 17.3688 19.7181 17.2428 19.7146 17.1646C19.71 17.0398 19.6061 16.9103 19.493 16.8554L18.814 16.5509C18.814 16.5509 17.799 16.1088 17.1783 15.8264C17.1133 15.7981 17.0437 15.7818 16.973 15.7786C16.8931 15.7704 16.8125 15.7794 16.7364 15.8049C16.6603 15.8305 16.5906 15.872 16.532 15.9268C16.5261 15.9244 16.448 15.9909 15.6045 17.0129C15.556 17.078 15.4894 17.1271 15.4129 17.1542C15.3364 17.1812 15.2537 17.1848 15.1751 17.1646C15.0991 17.1442 15.0247 17.1185 14.9523 17.0876C14.8076 17.0269 14.7575 17.0036 14.6583 16.9616C13.9887 16.6694 13.3688 16.2746 12.8208 15.7914C12.6738 15.6631 12.5373 15.5231 12.3973 15.3878C11.9383 14.9482 11.5383 14.4509 11.2073 13.9084L11.1385 13.7976C11.089 13.7231 11.049 13.6428 11.0195 13.5584C10.9751 13.3869 11.0906 13.2493 11.0906 13.2493C11.0906 13.2493 11.3741 12.9389 11.506 12.7709C11.6343 12.6076 11.7428 12.4489 11.8128 12.3358C11.9505 12.1141 11.9936 11.8866 11.9213 11.7104C11.5946 10.9124 11.2563 10.1179 10.9086 9.32925C10.8398 9.17292 10.6356 9.06092 10.4501 9.03875C10.3871 9.03175 10.3241 9.02475 10.2611 9.02008C10.1044 9.0123 9.94744 9.01386 9.79095 9.02475L10.0255 9.01542L10.0266 9.01659Z"
                    fill="#064376"
                  />
                </svg>
                <Link>+996 777 996 777</Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <path
                    d="M15.2026 2.83444C16.054 2.83118 16.9053 2.83973 17.7564 2.86011L17.9828 2.86828C18.2441 2.87761 18.5019 2.88928 18.8134 2.90328C20.0548 2.96161 20.9018 3.15761 21.6449 3.44578C22.4149 3.74211 23.0636 4.14344 23.7123 4.79211C24.3054 5.37498 24.7644 6.08005 25.0574 6.85828C25.3456 7.60144 25.5416 8.44961 25.5999 9.69094C25.6139 10.0013 25.6256 10.2603 25.6349 10.5216L25.6419 10.7479C25.6627 11.5987 25.6716 12.4496 25.6688 13.3006L25.6699 14.1709V15.6993C25.6728 16.5506 25.6639 17.402 25.6431 18.2531L25.6361 18.4794C25.6268 18.7408 25.6151 18.9986 25.6011 19.3101C25.5428 20.5514 25.3444 21.3984 25.0574 22.1416C24.7654 22.9207 24.3062 23.6263 23.7123 24.2089C23.1289 24.802 22.4235 25.261 21.6449 25.5541C20.9018 25.8423 20.0548 26.0383 18.8134 26.0966C18.5019 26.1106 18.2441 26.1223 17.9828 26.1316L17.7564 26.1386C16.9053 26.1593 16.054 26.1683 15.2026 26.1654L14.3323 26.1666H12.8051C11.9537 26.1695 11.1024 26.1605 10.2513 26.1398L10.0249 26.1328C9.74799 26.1227 9.47109 26.1111 9.19428 26.0978C7.95294 26.0394 7.10594 25.8411 6.36161 25.5541C5.58307 25.2617 4.87789 24.8026 4.29544 24.2089C3.70166 23.6259 3.24221 22.9204 2.94911 22.1416C2.66094 21.3984 2.46494 20.5514 2.40661 19.3101C2.39362 19.0333 2.38195 18.7564 2.37161 18.4794L2.36578 18.2531C2.34427 17.402 2.33455 16.5506 2.33661 15.6993V13.3006C2.33335 12.4496 2.34191 11.5987 2.36228 10.7479L2.37044 10.5216C2.37978 10.2603 2.39144 10.0013 2.40544 9.69094C2.46378 8.44844 2.65978 7.60261 2.94794 6.85828C3.24121 6.07967 3.70157 5.3748 4.29661 4.79328C4.87865 4.19915 5.5834 3.73928 6.36161 3.44578C7.10594 3.15761 7.95178 2.96161 9.19428 2.90328L10.0249 2.86828L10.2513 2.86244C11.102 2.84095 11.953 2.83122 12.8039 2.83328L15.2026 2.83444ZM14.0033 8.66778C13.2304 8.65684 12.463 8.79964 11.7457 9.08786C11.0285 9.37607 10.3757 9.80397 9.82526 10.3467C9.27483 10.8894 8.83774 11.5361 8.53941 12.2492C8.24108 12.9623 8.08745 13.7275 8.08745 14.5005C8.08745 15.2735 8.24108 16.0388 8.53941 16.7519C8.83774 17.465 9.27483 18.1117 9.82526 18.6544C10.3757 19.1971 11.0285 19.625 11.7457 19.9132C12.463 20.2014 13.2304 20.3442 14.0033 20.3333C15.5504 20.3333 17.0341 19.7187 18.1281 18.6247C19.222 17.5308 19.8366 16.047 19.8366 14.4999C19.8366 12.9528 19.222 11.4691 18.1281 10.3752C17.0341 9.28119 15.5504 8.66778 14.0033 8.66778ZM14.0033 11.0011C14.4682 10.9925 14.9302 11.0767 15.3622 11.2487C15.7942 11.4207 16.1877 11.677 16.5195 12.0027C16.8514 12.3285 17.115 12.7171 17.295 13.1458C17.4749 13.5746 17.5677 14.0349 17.5678 14.4999C17.5678 14.9649 17.4752 15.4253 17.2954 15.8541C17.1156 16.2829 16.8521 16.6716 16.5204 16.9975C16.1886 17.3233 15.7953 17.5798 15.3633 17.7519C14.9313 17.924 14.4694 18.0084 14.0044 17.9999C13.0762 17.9999 12.1859 17.6312 11.5296 16.9748C10.8732 16.3184 10.5044 15.4282 10.5044 14.4999C10.5044 13.5717 10.8732 12.6814 11.5296 12.0251C12.1859 11.3687 13.0762 10.9999 14.0044 10.9999L14.0033 11.0011ZM20.1283 6.91778C19.7519 6.93284 19.396 7.09295 19.135 7.36458C18.874 7.6362 18.7283 7.99827 18.7283 8.37494C18.7283 8.75162 18.874 9.11369 19.135 9.38531C19.396 9.65693 19.7519 9.81705 20.1283 9.83211C20.5151 9.83211 20.886 9.67846 21.1595 9.40497C21.433 9.13148 21.5866 8.76055 21.5866 8.37378C21.5866 7.987 21.433 7.61607 21.1595 7.34258C20.886 7.06909 20.5151 6.91544 20.1283 6.91544V6.91778Z"
                    fill="#064376"
                  />
                </svg>
                <Link>envision.bishkek</Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <path
                    d="M20.4487 17.5408C20.4487 18.7168 20.7833 19.1858 21.6583 19.1858C23.6085 19.1858 24.8503 16.7008 24.8503 12.568C24.8503 6.25124 20.2471 3.22724 14.5001 3.22724C8.58789 3.22724 3.21049 7.19204 3.21049 14.6848C3.21049 21.8416 7.91449 25.7392 15.1385 25.7392C17.5913 25.7392 19.2377 25.4704 21.7563 24.6304L22.2967 26.8802C19.8103 27.688 17.1531 27.9218 15.1049 27.9218C5.62969 27.9218 0.554688 22.7138 0.554688 14.6834C0.554688 6.58584 6.43609 1.07544 14.5337 1.07544C22.9673 1.07544 27.4347 6.11544 27.4347 12.2978C27.4347 17.5394 25.7897 21.5378 20.6153 21.5378C18.2619 21.5378 16.7177 20.597 16.5161 18.5124C15.9113 20.8308 14.2985 21.5378 12.1131 21.5378C9.18989 21.5378 6.73709 19.2852 6.73709 14.7506C6.73709 10.181 8.88889 7.35864 12.7529 7.35864C14.8025 7.35864 16.0793 8.16504 16.6477 9.44184L17.6235 7.66104H20.4459V17.5408H20.4487ZM16.3173 13.1056C16.3173 11.259 14.9383 10.4848 13.7959 10.4848C12.5527 10.4848 11.1765 11.4914 11.1765 14.4496C11.1765 16.8016 12.2181 18.112 13.7959 18.112C14.9047 18.112 16.3173 17.4064 16.3173 15.4576V13.1056Z"
                    fill="#064376"
                  />
                </svg>
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