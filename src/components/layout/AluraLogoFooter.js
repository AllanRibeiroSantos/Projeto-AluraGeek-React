import React from 'react';
import styles from './AluraLogoFooter.module.css';
import alurageeklogo from '../../img/alurageeklogo.svg'

export default function AluraLogoFooter() {
  return (
    <div className={styles.footer_logo_container}>
      <img src={alurageeklogo} className={styles.footer_container_logo} alt='Logo AluraGeek' />
      <p><span className={styles.footer_logoName}>Alura</span>Geek</p>
    </div>
  )
}
