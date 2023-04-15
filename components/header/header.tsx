import React from 'react'
import Menu from './menu'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo.webp'

const Header = () => {
  return (
    <nav className='container mx-auto flex items-center justify-between h-12 md:h-16 relative py-2'>
      <div className='h-8 w-10 md:h-12 md:w-14 relative'>
        <Link href={'/'}>
          <Image
            src={logo}
            alt={'Pinglish'}
            fill
            priority
            sizes='100%'
          />
        </Link>
      </div>
      <Menu />
    </nav>
  )
}

export default Header