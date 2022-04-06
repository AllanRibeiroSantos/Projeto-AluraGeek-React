import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import styles from './Banner.module.css';
import banner from '../../img/banner_full.jpeg';

export default function Banner({ titulo, descricao }) {
  return (
    <div className={styles.banner_container} >
      <img src={banner} className={styles.banner_image} />
      <div className={styles.banner_descricao}>
        <h2 className={styles.banner_titulo}>{titulo}</h2>
        <p className={styles.espacamento_paragr}>{descricao}</p>
        <ButtonAzul text='Ver Consoles' />
      </div>
    </div>
  )
}
