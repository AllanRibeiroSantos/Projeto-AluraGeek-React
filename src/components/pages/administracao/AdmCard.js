import React from 'react';
import styles from './AdmCard.module.css'

export default function AdmCard({ titulo }) {
  return (
    <>
      <div className={styles.adm_card}>
        <h2>{titulo}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris ipsum, convallis vel semper sed, pretium ut lectus. Mauris semper facilisis lectus, sed sollicitudin augue convallis id.</p>
      </div>
    </>
  )
}
