import React from 'react';
import styles from './ButtonArrow.module.css';

export default function ButtonArrow() {

  function teste() {
    console.log('Botão ainda não funcionando.')
  }

  return (
    <button className={styles.buttonArrow}
      onClick={teste}>
      {">"}
    </button>
  )
}
