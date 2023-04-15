import Image from 'next/image'
import React from 'react'
import image from '@/public/img/learn.jpg'

const Baner = () => {
  return (
    <div className='w-screen max-w-screen-2xl h-[46vw] max-h-[44rem] mx-auto relative'>
      <Image
        src={image}
        alt='Learn English'
        fill
        style={{objectFit: 'cover'}}
      />
    </div>
  )
}

export default Baner