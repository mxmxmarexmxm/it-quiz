import React, { useState } from 'react';
import AnswerItem from '../components/Answer item/AnswerItem';
import { getObjKey } from '../utils/get-obj-keys';
import GameOverScreen from './GameOverScreen';
import classes from './QuizScreen.module.css';

let trueAnswers = [];
let falseAnswers = [];

const QuizScreen = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [gameIsOver, setGameIsOver] = useState(false);
  const { questions } = props;

  let answersArray = questions[currentQuestion].answers;
  let answersValues = Object.values(answersArray).filter((v) => v !== null);

  function answersHandler(selectedAnswer) {
    let answerKey = getObjKey(answersArray, selectedAnswer);
    let newAnswers = [...chosenAnswers];
    let index = newAnswers.findIndex((el) => el === answerKey);

    if (index < 0) {
      newAnswers.push(answerKey);
    } else {
      newAnswers.splice(index, 1);
    }
    setChosenAnswers(newAnswers);
  }

  const nextHandler = () => {
    let correctAnswersList = questions[currentQuestion].correct_answers;
    const userAnswer = chosenAnswers.join(', ');
    let correct_answer = '';

    for (let key in correctAnswersList) {
      if (correctAnswersList[key] === 'true') {
        correct_answer = key.slice(0, -8);
      }
    }

    if (userAnswer === correct_answer) {
      trueAnswers.push({
        question: questions[currentQuestion],
        correctAnswer: correct_answer,
        userAnswer: userAnswer,
        questionNumber: currentQuestion + 1,
      });
    } else {
      falseAnswers.push({
        question: questions[currentQuestion],
        correctAnswer: correct_answer,
        userAnswer: userAnswer,
        questionNumber: currentQuestion + 1,
      });
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((curr) => curr + 1);
    } else {
      setGameIsOver(true);
    }
    setChosenAnswers([]);
  };

  if (gameIsOver) {
    return (
      <GameOverScreen
        trueAnswers={trueAnswers}
        falseAnswers={falseAnswers}
        questions={questions}
      />
    );
  }

  return (
    <div className={classes.container}>
      {
        <h2 className={classes.title}>
          {currentQuestion + 1 + '. '}
          {questions[currentQuestion].question}
        </h2>
      }
      <div className={classes['answers-container']}>
        {answersValues.map((answer) => (
          <AnswerItem
            key={answer}
            onClick={() => answersHandler(answer)}
            text={answer}
          />
        ))}
      </div>
      <button onClick={nextHandler}>Next </button>
    </div>
  );
};

export default QuizScreen;
