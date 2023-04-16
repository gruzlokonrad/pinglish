import Link from 'next/link'
import React from 'react'

const Menu = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
  ]

  return (
    <div>
      {menuItems.map((item, index) => {
        return (
            <Link
              key={index}
              href={item.path}
            >
              {item.name}
            </Link>
          )
      })}
    </div>
  )
}

export default Menu