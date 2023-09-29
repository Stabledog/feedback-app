// TODO: Dummy component used in tsx conversion. Remove from final lab
import React from 'react'
//import { buttonStyles } from './Button.styles'

type Props = {
    onClick: any,
    text: string
};

const Button = ({ onClick, text }: Props) => (
  <button onClick={onClick} >
    {text}
  </button>
)

export default Button
