import React from 'react';
import Button from '../buttons/Button';
import InputPesquisa from '../form/InputPesquisa';
import styles from './Header.module.css';
import AluraLogo from './AluraLogo';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_logoForm}>
        <AluraLogo />
        <InputPesquisa type='text' placeholder='O que deseja encontrar?' />
      </div>
      <Button text='Login' />
    </header>
  )
}
