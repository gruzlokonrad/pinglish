import React from 'react'
import Container from '../Container/Container'
import styles from './Card.module.scss'
import Image from 'next/image'
import img from 'public/img/board.jpg'
import clsx from 'clsx'


interface ICard {
  header: string,
  description: string,
  bgColor: string,
  img?: {
    src: string,
    alt: string,
  },
  reversed: boolean,
  button?: JSX.Element,
}

const Card = ({
  header,
  description,
  bgColor,
  // img,
  reversed,
  button, //set default
}: ICard) => {
  return (
    <template>
      <Container>
        <article className={clsx(!reversed && 'text-right')}>
          <header>
            <h3>{header}</h3>
          </header>
          <div className={styles.description}>{description}</div>
        </article>
        <article>
          <Image
            src={img}
            alt="Children with board"
          />
        </article>
      </Container>
    </template>
  )
}

export default Card;