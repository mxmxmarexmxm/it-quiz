import { useState } from 'react';
import Button from '../components/UI/Button';
import classes from './ConfigureQuizScreen.module.css';
import { ReactComponent as BackIcon } from '../assets/img/icons/back-icon.svg';
import { ReactComponent as BackgroundIcon } from '../assets/img/icons/background-icon.svg';
import { ReactComponent as BlackWhiteIcon } from '../assets/img/icons/black-white-icon.svg';
import binary from '../assets/img/binary.png';
import binary2 from '../assets/img/binary2.jpg';
import binary3 from '../assets/img/binary3.jpg';
import binary4 from '../assets/img/binary4.jpg';
import binary5 from '../assets/img/binary5.jpg';
import binary6 from '../assets/img/binary6.jpg';
import binary7 from '../assets/img/binary7.jpg';
import black from '../assets/img/black.png';

const CATEGORIES = ['Linux', 'Bash', 'Docker', 'SQL', 'CMS', 'Code', 'DevOps'];
const DIFFICULTY = ['Easy', 'Medium', 'Hard'];
const NUMBERS = [1, 5, 10, 15, 20];
const BACKGROUNDS = [
  binary,
  binary2,
  binary3,
  binary4,
  binary5,
  binary6,
  binary7,
  black
];

const ConfigureQuizScreen = (props) => {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [background, setBackground] = useState(1);
  const [isBlured, setIsBlured] = useState(true);
  const screen = document.getElementById('screen');

  if (numberOfQuestions) {
    let config = { category, difficulty, numberOfQuestions };
    props.onStartQuiz(config);
  }

  const handleBack = () => {
    if (difficulty) {
      setDifficulty(null);
      return;
    }
    if (category) {
      setCategory(null);
    }
  };

  const changeBackgoundImage = () => {
    screen.style.setProperty(
      '--background-image-before',
      `url(${BACKGROUNDS[background]})`
    );
    setBackground((curr) => {
      return curr >= BACKGROUNDS.length - 1 ? 0 : curr + 1;
    });
  };

  const changeBackgroundColors = () => {
    const screen = document.getElementById('screen');
    if (isBlured) {
      screen.style.setProperty(
        '--background-image-filter',
        `grayscale(0%) blur(0px)`
      );
      setIsBlured(false);
    } else {
      screen.style.setProperty(
        '--background-image-filter',
        'grayscale(88%) blur(5px)'
      );
      setIsBlured(true);
    }
  };

  return (
    <div>
      <div className={classes['top-nav']}>
        <BackIcon className={classes['nav-icon']} onClick={handleBack} />
        <div className={classes['top-nav-right']}>
          <BlackWhiteIcon
            className={classes['nav-icon']}
            onClick={changeBackgroundColors}
          />
          <BackgroundIcon
            className={classes['nav-icon']}
            onClick={changeBackgoundImage}
          />
        </div>
      </div>
      <div className={classes.container}>
        {!category && (
          <div>
            <h1 className={classes.title}>Choose topic:</h1>
            {CATEGORIES.map((category) => (
              <Button
                onClick={() => setCategory(category)}
                key={category}
                text={category}
              />
            ))}
          </div>
        )}
        {category && !difficulty && (
          <div>
            <h1 className={classes.title}>Choose difficulty:</h1>
            {DIFFICULTY.map((dif) => (
              <Button onClick={() => setDifficulty(dif)} key={dif} text={dif} />
            ))}
          </div>
        )}
        {category && difficulty && (
          <div>
            <h1 className={classes.title}>Choose number of questions:</h1>
            {NUMBERS.map((num) => (
              <Button
                onClick={() => setNumberOfQuestions(num)}
                key={num}
                text={num}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigureQuizScreen;
