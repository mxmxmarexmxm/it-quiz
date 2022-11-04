import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <div onClick={props.onClick} className={`${classes.wrapper} ${props.class}`}>
      <button>{props.text}</button>
    </div>
  )
}

export default Button