import { useState } from 'react';
import { getQuestions } from './utils/get-questions';
import './App.css';

import Layout from './components/UI/Layout';
import QuizScreen from './pages/QuizScreen';
import ConfigureQuizScreen from './pages/ConfigureQuizScreen';
import WelcomeScreen from './pages/WelcomeScreen';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [questions, setQuestions] = useState(null);

  const getStartedHandler = () => {
    setIsStarted(true);
  };

  const onStartQuizHandler = async (config) => {
    const questions = await getQuestions(config);
    setQuestions(questions);
  };

  let content = <WelcomeScreen onGetStarted={getStartedHandler} />;

  if (isStarted && !questions) {
    content = <ConfigureQuizScreen onStartQuiz={onStartQuizHandler} />;
  }

  if (questions) {
    content = <QuizScreen questions={questions} />;
  }

  return <Layout>{content}</Layout>;
}

export default App;
