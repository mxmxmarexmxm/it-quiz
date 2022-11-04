import { useState } from 'react';
import Button from '../components/UI/Button';
import classes from './ConfigureQuizScreen.module.css'

const CATEGORIES = ['Linux', 'Bash', 'Docker', 'SQL', 'CMS', 'Code', 'DevOps'];
const DIFFICULTY = ['Easy', 'Medium', 'Hard'];
const NUMBERS = [1, 5, 10, 15, 20];

const ConfigureQuizScreen = (props) => {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);

  const setCategoryHandler = (category) => {
    let selectedCategory = category.toLowerCase();
    setCategory(selectedCategory);
  };

  const setDifficultyHandler = (dif) => {
    setDifficulty(dif);
  };

  const setNumberOfQuestionsHandler = (num) => {
    setNumberOfQuestions(num);
  };

  if (numberOfQuestions) {
    let config = { category, difficulty, numberOfQuestions };
    props.onStartQuiz(config);
  }

  return (
    <div className={classes.container}>
      {!category && (
        <div>
          <h1>Choose topic:</h1>
          {CATEGORIES.map((category) => (
            <Button
              onClick={setCategoryHandler.bind(this, category)}
              key={category}
              text={category}
            />
          ))}
        </div>
      )}
      {category && !difficulty && (
        <div>
          <h1>Choose difficulty:</h1>
          {DIFFICULTY.map((dif) => (
            <Button
              onClick={setDifficultyHandler.bind(this, dif)}
              key={dif}
              text={dif}
            />
          ))}
        </div>
      )}
      {category && difficulty && (
        <div>
          <h1>Choose number of questions:</h1>
          {NUMBERS.map((num) => (
            <Button
              onClick={setNumberOfQuestionsHandler.bind(this, num)}
              key={num}
              text={num}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConfigureQuizScreen;
