import React from 'react';
import styles from './AluraLogo.module.css';
import alurageeklogo from '../../img/alurageeklogo.svg'

export default function AluraLogo() {
  return (
    <div className={styles.logo_container}>
      <img src={alurageeklogo} className={styles.container_logo} alt='Logo AluraGeek' />
      <p>
        <span className={styles.header_logoName}>
          Alura
        </span>
        Geek
      </p>
    </div>
  )
}
