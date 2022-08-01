import React, { useState, useEffect } from 'react';
import { debounce } from './helpers';
import Container from '../Container/Container';
import styles from './Header.module.scss';
import Link from 'next/link';
import { navLinks } from '../../utils/data';
import Image from 'next/image';
import logo from '../../../public/logo512.png';


const Header: React.FC = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(1);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Container sectionName={`
    ${styles.headerSection}
    ${!visible ? styles.headerSection__hidden : ''}
    ${prevScrollPos > 200 ? styles.headerSection__background : ''}
    `}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo pinglish"
            width={80}
            height={70}
          />
        </div>
        <nav className={styles.navbar}>
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </Container>
  )
}

export default Header