import React from 'react';
import Button from '../components/UI/Button';
import classes from './GameOverScreen.module.css';
import { ReactComponent as FalseIcon } from '../assets/img/icons/false-icon.svg';
import { ReactComponent as CorrectIcon } from '../assets/img/icons/correct-icon.svg';

const GameOverScreen = (props) => {
  const { trueAnswers, falseAnswers } = props;

  return (
    <div className={classes.container}>
      <h1>
        Result: {trueAnswers.length} of {props.questions.length} (
        {(trueAnswers.length / props.questions.length) * 100}%)
      </h1>

      {trueAnswers.length !== 0 && (
        <div className={classes['answers-container']}>
          <span className={classes['answers-title']}>
            <CorrectIcon className={classes.icon} />
            True answers:
          </span>
          {trueAnswers.map((answer) => (
            <div
              key={answer.question.id}
              className={classes['question-container']}
            >
              <span className={classes['question-title']}>
                {answer.questionNumber}. {answer.question.question}
              </span>
              <span className={classes['question-answer']}>
                <CorrectIcon className={classes.icon} />
                {answer.question.answers[answer.userAnswer]}
              </span>
            </div>
          ))}
        </div>
      )}

      {falseAnswers.length !== 0 && (
        <div className={classes['answers-container']}>
          <span className={classes['answers-title']}>
            <FalseIcon className={classes.icon} />
            False answers:
          </span>
          {falseAnswers.map((answer) => (
            <div
              key={answer.question.id}
              className={classes['question-container']}
            >
              <span className={classes['question-title']}>
                {answer.questionNumber}. {answer.question.question}
              </span>

              <span className={classes['question-answer']}>
                <FalseIcon className={classes.icon} />
                {answer.question.answers[answer.userAnswer]}
              </span>
              <span className={classes['question-answer']}>
                <CorrectIcon className={classes.icon} />
                {answer.question.answers[answer.correctAnswer]}
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
