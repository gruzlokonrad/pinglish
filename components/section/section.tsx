'use client'
import clsx from 'clsx'
import React from 'react'
import { baseColors } from '@/app/colors'

interface IProps {
  bgColor?: string,
  classSection?: string,
  children: JSX.Element | JSX.Element[] | string
}

const Section = ({ bgColor, children, classSection }: IProps): JSX.Element => {
  return (
    <section className={clsx(bgColor && `text-white`)} style={{backgroundColor: bgColor}}>
      <div className={clsx(classSection, 'container mx-auto')}>
        {children}
      </div>
    </section>
  )
}

export default Section