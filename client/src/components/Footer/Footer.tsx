import React from 'react';
import './Footer.scss';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { Button } from '../Button/Button';

const Footer = () => {
  return (
    <footer>
      <div className="contact" id="contact">
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
      </div>
    </footer>
  )
};

export default Footer;
