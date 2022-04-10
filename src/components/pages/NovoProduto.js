import React from 'react';
import Button from '../buttons/Button';
import Input from '../form/Input'
import styles from './NovoProduto.module.css'
import { IoMdImage } from 'react-icons/io';
import ButtonAzul from '../buttons/ButtonAzul';

export default function NovoProduto() {
  return (
    <section className={styles.section_novoProduto}>
      <div className={styles.novoProduto_container}>
        <h2>Adicionar novo produto</h2>
        <div className={styles.novoProduto_cadastro_container}>
          <div className={styles.novoProduto_cadastro_img}>
            <div className={styles.img_icon}>
              <IoMdImage />
            </div>
            <p>Arraste para adicionar uma imagem para o produto</p>
          </div>
          <p className={styles.novoProduto_ouText}>Ou</p>
          <Button text='Procure no seu computador' />
        </div>
        <form className={styles.novoProduto_form_container}>
          <Input type='text' placeholder='Nome do produto' />
          <Input type='text' placeholder='Preço do produto' />
          <textarea placeholder='Descrição do produto' />
          <ButtonAzul text='Adicionar produto' />
        </form>
      </div>
    </section>
  )
}
