import React from 'react'
import Section from '../section/section'
import Button from '@/components/ui/button/button'

const CallToAction = ({ header, content, bgColor }: any) => {
  return (
    <Section
      classSection='flex items-center flex-col justify-evenly min-h-min text-center h-full'
      bgColor={bgColor}
    >
      <div className='section-header'>
        <h1>{header}</h1>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>{content}</p>
      </div>
      <Button>Zadzwoń</Button>
    </Section>
  )
}

export default CallToAction