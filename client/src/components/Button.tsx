import React from 'react'
import './Button.scss'


const STYLE = ['outline'];
const COLOR = ['red', 'blue', 'white'];
// const SIEZE = ['small', 'medium', 'large'];


interface IButton {
  color?: any;
  style?: any;
  children: string| undefined;
  onClick?: any | undefined;
}

export const Button = ({
  color,
  style,
  children,
  onClick,
}:IButton) => {

  const checkStyle = STYLE.includes(style) ? style : null;
  const checkColor = COLOR.includes(color) ? color : null;

  return (
    <button className={`${checkStyle} ${checkColor}`} onClick={onClick}>
      {children}
    </button>
  );
};