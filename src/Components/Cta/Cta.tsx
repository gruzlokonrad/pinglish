import Container from "../Container/Container"
import styles from './Cta.module.scss'

interface ICta {
  [key: string]: string,
}

const Cta = ({
  header,
  description,
  bgColor
}: ICta) => {
  return (
    <Container className={`bg-blue text-white h-96 flex flex-col text-center justify-evenly`}>
      <header>
        <h1>{header}</h1>
      </header>
      <div>{description}</div>
      {/* <Button></Button> */}
    </Container>
  )
}

export default Cta