'use client'
import clsx from 'clsx'
import React from 'react'
import { baseColors } from '@/app/colors'

interface IProps {
  bgColor?: string,
  classSection?: string,
  children: JSX.Element | JSX.Element[] | string
}

const Section = ({ bgColor, children, classSection}: IProps): JSX.Element => {
  return (
    <section
      className={`${clsx(bgColor && `text-white`)}
        min-h-[250px] flex items-center flex-col justify-evenly
        sm:min-h-[22rem] md:min-h-[24rem] lg:min-h-[26rem] xl:min-h-[28rem] 2xl:min-h-[30rem]`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={clsx(classSection, 'container mx-auto w-11/12 md:w-3/4')}>
        {children}
      </div>
    </section>
  )
}

export default Section