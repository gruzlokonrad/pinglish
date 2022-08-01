import React from 'react';
import Container from '../Container/Container';
import styles from './StackingCard.module.scss';

interface IStackingCard {
  reversed: boolean;
  bgColor: string,
  fontColor: string,
  headline: string,
  description: string,
  img: string,
  alt: string
}


const StackingCard = ({
  reversed,
  bgColor,
  fontColor,
  headline,
  description,
  img,
  alt
}: IStackingCard) => {
  return (
    <Container sectionName={styles.stackingCardSection} sectionColor={bgColor}>
      <div
        className={reversed ? `${styles.stackingCard} ${styles.left}` : styles.stackingCard}
      >
        <div className={styles.content}>
          <h2>{headline}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.image}>
          <img src={img} alt={alt} />
        </div>
      </div >
    </Container>
  );
};

export default StackingCard;
