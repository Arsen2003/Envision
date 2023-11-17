import React from 'react';
import styles from './RequisitesPage.module.scss'
import mbankImage from '../../assets/images/mbank-image.png'
import qrImage from '../../assets/images/QR-image.png'
const RequisitesPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.requisite}>
        <img src={mbankImage} alt="mbank-image" />
        <div>
          <img className={styles.code} src={qrImage} alt="qr" />
        </div>
        <span>+996556107018</span>
      </section>
    </main>
  )
};

export default RequisitesPage;