import React from 'react';
import Button from '../components/UI/Button';
import classes from './GameOverScreen.module.css';

const GameOverScreen = (props) => {
  const { correctAnswers, incorrectAnswers } = props;

  return (
    <div>
      <h1>
        Result: {correctAnswers.length} of {props.questions.length} (
        {(correctAnswers.length / props.questions.length) * 100}%)
      </h1>

      {incorrectAnswers.length !== 0 && (
        <div>
          <h1>Incorrect answers:</h1>
          {incorrectAnswers.map((answer) => (
            <div key={answer.question.id} className={classes.question}>
              <h2>
                {answer.questionNumber}. {answer.question.question}
              </h2>
              <h4> Your answer: {answer.question.answers[answer.userAnswer]}</h4>
              <h4> Correct answer: {answer.question.answers[answer.correctAnswer]}</h4>
            </div>
          ))}
        </div>
      )}

      {correctAnswers.length !== 0 && (
        <div>
          <h1>Correct answers:</h1>
          {correctAnswers.map((answer) => (
            <div key={answer.question.id} className={classes.question}>
              <h2>
                {answer.questionNumber}. {answer.question.question}
              </h2>
              <h4> Your answer: {answer.question.answers[answer.userAnswer]}</h4>
              <h4> Correct answer: {answer.question.answers[answer.correctAnswer]}</h4>
            </div>
          ))}
        </div>
      )}
      <Button onClick={() => window.location.reload(false)} text='Try Again!' />
    </div>
  );
};

export default GameOverScreen;
