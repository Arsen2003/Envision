import React,{useState} from 'react';
import styles from './FinancialReportPage.module.scss'
import contentIcon1 from '../../assets/icons/content-icon-1.svg'
import contentIcon2 from '../../assets/icons/content-icon-2.svg'
import usersGroupIcon from '../../assets/icons/users-group-icon.svg'
import FinancialTab from '../../components/FinancialTab/FinancialTab';



const FinancialReportPage = () => {

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
        <h1>Финансовый отчет</h1>
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
        <div className={styles.content}>
          <div className={styles.all_result}>
            <div className={styles.all_result__card}>
              <img src={usersGroupIcon} alt="users-group-icon" />
              <div>
                <h5>300K</h5>
                <span>Поступили</span>
              </div>
            </div>
            <div className={styles.all_result__card}>
              <img src={usersGroupIcon} alt="users-group-icon" />
              <div>
                <h5>300K</h5>
                <span>Пожертвовали</span>
              </div>
            </div>
          </div>
          <div className={styles.tabs}>
            <FinancialTab/>
          </div>
        </div>
      </div>
    </main>
  )
};

export default FinancialReportPage;