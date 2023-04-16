import React from 'react'
import Section from '../section/section'
import Image from 'next/image'
import clsx from 'clsx'

const InfoCard = ({ header, content, bgColor, imageToLeft, image }: any) => {
  return (
    <Section
      bgColor={bgColor}
      classSection='flex flex-col sm:flex-row py-10 gap-y-5 gap-x-10'
    >
      <div className={`my-auto text-center w-full section-header basis-1/2 ${clsx(imageToLeft ? 'sm:text-left' : 'sm:text-right')}`}>
        <h1>{header}</h1>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>{content}</p>
      </div>
      <div className={`${clsx(imageToLeft && 'sm:order-first')} my-auto w-full relative sm:basis-1/2 h-56 xl:h-64 2xl:h-80`}>
        <Image
          src={`/img/${image}`}
          alt={image}
          fill
          className='object-contain sm:object-cover'
          priority
          sizes='100%'
        />
      </div>
    </Section>
  )
}

export default InfoCard