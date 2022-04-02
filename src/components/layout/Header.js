import React from 'react';
import Button from '../buttons/Button';
import Input from '../form/Input';
import styles from './Header.module.css';
import alurageeklogo from '../../img/alurageeklogo.svg'

export default function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.logo_container}>
        <img src={alurageeklogo} className={styles.container_logo} />
        <p><span className={styles.header_logoName}>Alura</span>Geek</p>
        <Input type='text' placeholder='O que deseja encontrar?' />
      </div>
      <Button text='Login' />
    </header>
  )
}
