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
    <Container sectionStyle={styles.cta}>
      <header>
        <h1>{header}</h1>
      </header>
      <div>{description}</div>
      {/* <Button></Button> */}
    </Container>
  )
}

export default Cta