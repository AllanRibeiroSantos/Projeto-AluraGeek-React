import React from 'react';
import Button from '../buttons/Button';
import InputPesquisa from '../form/InputPesquisa';
import styles from './Header.module.css';
import AluraLogo from './AluraLogo';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_logoForm}>
        <AluraLogo />
        <InputPesquisa type='text' placeholder='O que deseja encontrar?' />
      </div>
      <Button text='Login' />
      <span className={styles.lupa_icon_smart}><BiSearchAlt2 /></span>
    </header>
  )
}
