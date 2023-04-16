'use client'
import React from 'react'

interface IButton {
  children: string
}

const Button = ({ children }: IButton) => {
  return (
    <button>
      {children}
      {/* <style jsx>{`
      button {
        background-color: white;
        padding: 15px 30px;
        color: black;
        border-radius: 20px;
      }
      `}</style> */}
    </button>
  )
}

export default Button