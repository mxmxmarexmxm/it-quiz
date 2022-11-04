import React, { useState } from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = (props) => {
  const [focused, setIsFocused] = useState(false);

  const selectItem = () => {
    setIsFocused((f) => !f);
  };

  let buttonClasses = focused
    ? `${classes.button} ${classes['button-focus']}`
    : `${classes.button}`;

  return (
    <div
      className={classes.wrapper}
      onClick={() => {
        selectItem();
        props.onClick();
      }}
    >
      <button className={buttonClasses}>{props.text}</button>
    </div>
  );
};

export default AnswerItem;
