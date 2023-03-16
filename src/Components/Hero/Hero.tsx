import Image from 'next/image'
import heroImage from 'public/img/learn.jpg'
import Container from '../Container/Container'
import styles from './Hero.module.scss'


const Hero = () => {
  return (
    <Container className='px-0 py-0'>
      <Image
        src={heroImage}
        alt="Never stop learning image"
        priority={true}
      />
    </Container>
  )
}

export default Hero