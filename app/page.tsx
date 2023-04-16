import { baseColors } from './colors'
import Baner from '@/components/view/baner/baner'
import CallToAction from '@/components/view/callToAction/callToAction'
import InfoCard from '@/components/view/infoCard/infoCard'

export default function Home() {
  return (
    <main>
      <Baner />
      
      <CallToAction
        header='Angielski dla Twojego dziecka'
        content='Zadzwoń, aby dowiedzieć się więcej!'
        bgColor={baseColors.blue}
        />

      <InfoCard
        header='Moja historia'
        content='Poszłam do szkoły - to wtedy miałam pierwszy kontakt z językiem angielskim. Pierwsza jedynka.. nie brzmi zbyt dobrze, ale każdy musiał przez to przejść. Przy kolejnym podejściu udało się zaliczyć na trójkę. Zrozumiałam jak to działa. To wtedy przyszedł czas na piątki... i tak już zostało ;)'
        image='board.jpg'
      />
      <InfoCard
        header='Pierwsze znajomości'
        content='W liceum poziom mojego angielskiego mocno wzrósł, a to za sprawą świetnej nauczycielki - którą teraz sama się staje dla Waszych pociech! Systematyczna praca i sposób nauki wypracowany na wcześniejszym etapie edukacji pozwolił mi powielić sukcesy językowe. To właśnie wtedy zaczęły pojawiać się pierwsze prośby o lekcje angielskiego...'
        image='kids.jpg'
        bgColor={baseColors.gray}
        imageToLeft
      />
      <InfoCard
        header='Oddział Pingwinków'
        content='Studia sprawiły, że podeszłam do sprawy dużo odważniej. Zrozumiałam, że to coś wspaniałego! Kiedyś sama dostałam jedynkę z angielskiego, a teraz uczę moich małych uczniów jak mieć same piątki w dzienniku i wypracować własny system skutecznej nauki =)'
        image='smile.jpg'
      />

      <CallToAction
        header='&quot;Pinglish and learn English&quot;'
        content='Zadzwoń, aby dowiedzieć się więcej!'
        bgColor={baseColors.red}
      />
    </main>
  )
}
