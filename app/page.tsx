import Section from '@/components/section/section'
import { baseColors } from './colors'
import Baner from '@/components/baner/baner'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <main>
      <Baner />
      <Section
        classSection='section-cta'
        bgColor={baseColors.blue}
      >
        <div className='section-header'>
          <h1>Angielski dla Twojego dziecka</h1>
          <p>Zadzwoń, aby dowiedzieć się więcej!</p>
        </div>
        <Button>Zadzwoń</Button>
      </Section>
      <Section
        classSection='section-cta'
        bgColor={baseColors.red}>
        <div className='section-header'>
          <h1> &quot;Pinglish and learn English&quot;</h1>
          <p>Zadzwoń, aby dowiedzieć się więcej!</p>
        </div>
        <Button>Zadzwoń</Button>
      </Section>
    </main>
  )
}
