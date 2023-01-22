import Image from 'next/image'
import heroImage from 'public/img/learn.jpg'
import Container from '../Container/Container'
import styles from './Hero.module.scss'


const Hero = () => {
  return (
    <Container sectionStyle={styles.hero}>
      <Image
        src={heroImage}
        alt="Never stop learning image"
      />
    </Container>
  )
}

export default Hero