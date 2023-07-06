import React from 'react';
import Button from '../components/UI/Button';
import classes from './GameOverScreen.module.css';

const GameOverScreen = (props) => {
  const { correctAnswers, incorrectAnswers } = props;

  return (
    <div className={classes.container}>
      <h1>
        Result: {correctAnswers.length} of {props.questions.length} (
        {(correctAnswers.length / props.questions.length) * 100}%)
      </h1>

      {incorrectAnswers.length !== 0 && (
        <div className={classes['answers-container']}>
          <span className={classes['answers-title']}>Incorrect answers:</span>
          {incorrectAnswers.map((answer) => (
            <div
              key={answer.question.id}
              className={classes['question-container']}
            >
              <span className={classes['question-title']}>
                {answer.questionNumber}. {answer.question.question}
              </span>
              <span className={classes['question-answer']}>
                Your answer: {answer.question.answers[answer.userAnswer]}
              </span>
              <span className={classes['question-answer']}>
                Correct answer: {answer.question.answers[answer.correctAnswer]}
              </span>
            </div>
          ))}
        </div>
      )}

      {correctAnswers.length !== 0 && (
        <div className={classes['answers-container']}>
          <span className={classes['answers-title']}>Correct answers:</span>
          {correctAnswers.map((answer) => (
            <div
              key={answer.question.id}
              className={classes['question-container']}
            >
              <span className={classes['question-title']}>
                {answer.questionNumber}. {answer.question.question}
              </span>
              <span className={classes['question-answer']}>
                Your answer: {answer.question.answers[answer.userAnswer]}
              </span>
              <span className={classes['question-answer']}>
                Correct answer: {answer.question.answers[answer.correctAnswer]}
              </span>
            </div>
          ))}
        </div>
      )}
      <Button onClick={() => window.location.reload(false)} text="Try Again!" />
    </div>
  );
};

export default GameOverScreen;
