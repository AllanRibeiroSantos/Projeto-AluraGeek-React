import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner_image} >
      <div className={styles.banner_descricao}>
        <h2 className={styles.banner_titulo}>Dezembro Promocional</h2>
        <p className={styles.espacamento_paragr}>Produtos selecionados com 33% de desconto</p>
        <ButtonAzul text='Ver Consoles' />
      </div>
    </div>
  )
}