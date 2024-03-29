'use client'
import React from 'react'
import { baseColors } from '@/app/colors'

const Footer = () => {
  return (
    <>
      <footer
        className='flex flex-col sm:flex-row items-center justify-evenly'
        style={{ backgroundColor: baseColors.orange }}
      >
        <div className='my-10 md:my-20'>
          <h3 className=''>Adres</h3>
          <p>
            Mstowska 7 <br />
            42-244 Cegielnia
          </p>
        </div>
        <div className='my-10 md:my-20'>
          <h3>Kontakt</h3>
          <p>
            Korepetytorka <br />
            Sandra Knysak <br />
            603-864-246
          </p>
        </div>
      </footer>
    {/* <div className='socialMedia'>
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
        <FaYoutube />
      </div> */}

      {/* <style jsx>{`
        footer > * {
          margin: 50px 0;
        }
      `}</style> */}
    </>
  )
}

export default Footer