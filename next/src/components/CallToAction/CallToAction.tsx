import React from 'react'
import Container from '../Container/Container'
import styles from './CallToAction.module.scss'


interface ICallToAction {
  color: string;
  headline: string;
  description: string;
}

const COLOR = ['red']

const CallToAction = ({
  color,
  headline,
  description,
}: ICallToAction) => {

  const checkColor = COLOR.includes(color) ? color : null;


  return (
    <Container sectionName={`${styles.callToActionSection} default`} sectionColor={checkColor}>
      <div className={styles.callToAction}>
        <div className={styles.callToAction__headline}>
          {headline}
        </div>
        <div className={styles.callToAction__description}>
          {description}
        </div>
        {/* <Button color='white'>Zadzwoń</Button> */}
      </div>
    </Container>
  )
}

export default CallToAction