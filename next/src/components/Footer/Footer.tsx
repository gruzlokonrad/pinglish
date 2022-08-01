import React from 'react';
import styles from './Footer.module.scss';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import Container from '../Container/Container';
// import { Button } from '../Button/Button';

const Footer = () => {
  return (
    <footer>
      <Container sectionName={`${styles.footerSection}`}>
        <div className={styles.footer}>
          <div className={styles.info}>
            <div className={styles.info__address}>
              <h4>Adres</h4>
              <p>
                Mstowska 7 <br />
                42-244 Cegielnia
              </p>
            </div>
            <div className={styles.info__contact}>
              <h4>Kontakt</h4>
              <p>
                Korepetytorka <br />
                Sandra Knysak <br />
                603-864-246
              </p>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </Container>

      {/* <div className="contact" id="contact">
          <div className="address">
            <div>
              <div className="headline">
                Adres
              </div>
              Mstowska 7, <br />
              42-244 Cegielnia
            </div>
            <div>
              <div className="headline">
                Kontakt
              </div>
              Korepetytorka <br />
              Sandra Knysak <br />
              603-864-246
            </div>
          </div>
          <div className='socialMedia'>
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
        <div className="newsletter">
          <div>
            <div className="headline">
              Pinglish & Sztuka Pogawędki
            </div>
            Zapisz się, aby otrzymywać darmowe maile z praktycznymi rozmówkami w języku angielskim!
          </div>
          <div className='eMail'>
            <p>
              Adres E-mail
            </p>
            <input type="text" placeholder='Twój adres e-mail' />
            <Button>
            Zapisz się
          </Button>
          </div>
        </div> */}
    </footer>
  )
};

export default Footer;
