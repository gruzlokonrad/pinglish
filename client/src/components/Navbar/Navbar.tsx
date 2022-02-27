import { useState, useEffect } from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button/Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [bgNav, setBgNav] = useState(false);

  const [mobile, setMobile] = useState(false);


  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 150) {
      setBgNav(true)
    } else {
      setBgNav(false)
    }
  }

  const mobileView = () => {
    if (window.innerWidth <= 960) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", mobileView);

    return () => {
      window.removeEventListener("resize", mobileView);
      window.removeEventListener("scroll", changeBackground);
    }
  });

  return (
    <nav className={bgNav && !mobile ? 'nav-active' : ''}>
      <div className="navbar">
        <Link to="/">
          <img src='img/logo.webp' className="navbar__logo" alt="logo" />
        </Link>
        <div className="navbar__button" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <section className={click ? "navbar__menu active" : "navbar__menu"}>
          <div className="panel">
            <Link to="#" onClick={() => mobile ? setClick(false) : null} >
              Zaloguj się
            </Link>
            <Link to="sign-up" onClick={() => mobile ? setClick(false) : null} >
              Zarejestuj się
            </Link>
          </div>
          <Link to="/" onClick={() => mobile ? setClick(false) : null} >
            Strona główna
          </Link>
          <Link to="services" onClick={() => mobile ? setClick(false) : null} >
            Oferta
          </Link>
          <Link to="contact" onClick={() => mobile ? setClick(false) : null} >
            Kontakt
          </Link>
          {/* <a href={mobile ? "tel:+48603864246" : "#contact"} onClick={() => mobile ? setClick(false) : null}>
            <Button>Zadzwoń</Button>
          </a> */}
        </section>
      </div>
    </nav>
  )
}

export default Navbar
