import Container from "../Container/Container"
import styles from './Navbar.module.scss'
import Image from 'next/image'
import logo from 'public/img/logo.webp'
import { DOMAIN_NAME } from "@/app/constants"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
      <Container sectionStyle={styles.navbar}>
        <article style={{ flex: 1 }}>
          <Link href="#">
            <Image
              src={logo}
              alt={DOMAIN_NAME}
              width={80}
              // height={80}
            />
          </Link>
        </article>
        <article style={{ flex: 3, justifyContent: "flex-end" }}>
          <ul>
            <li>
              <Link href="#">Strona główna</Link>
            </li>
            <li>
              <Link href="#">Oferta</Link>
            </li>
            <li>
              <Link href="#">Kontakt</Link>
            </li>
          </ul>
        </article>
      </Container>
    </nav>
  )
}
export default Navbar