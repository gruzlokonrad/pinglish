import Card from '@/Components/Card/Card'
import Container from '@/Components/Container/Container'
import Hero from '@/Components/Hero/Hero'
import styles from './page.module.scss'
import * as data from './Data'
import Cta from '@/Components/Cta/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Cta {...data.ctaObjOne} />
      <Card {...data.cardObjOne} />
    </>
  )
}
