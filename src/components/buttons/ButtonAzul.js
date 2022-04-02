import React from 'react';
import styles from './ButtonAzul.module.css';

export default function ButtonAzul({text}) {
  return (
    <button className={styles.botao_azul}>{text}</button>
  )
}
