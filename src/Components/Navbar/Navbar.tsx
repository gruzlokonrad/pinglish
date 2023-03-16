import Container from "../Container/Container"
import Image from 'next/image'
import logo from 'public/img/logo.webp'
import { DOMAIN_NAME } from "@/app/constants"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
      {/* <Container className={styles.navbar}> */}
      <Container className="flex items-center">
        <article className="flex-auto">
          <Link href="#">
            <Image
              src={logo}
              alt={DOMAIN_NAME}
              width={80}
            // height={80}
            />
          </Link>
        </article>
        <article className="flex justify-end gap-x-5">
            {[
              ['Strona główna', '#'],
              ['Oferta', '#'],
              ['Kontakt', '#'],
            ].map(([title, url], index) => (
              <Link key={index} href={url}>{title}</Link>
            ))}
        </article>
      </Container>
    </nav>
  )
}
export default Navbar