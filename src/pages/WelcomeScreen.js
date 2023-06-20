import classes from './WelcomeScreen.module.css';
import Button from '../components/UI/Button';

const WelcomeScreen = (props) => {
  return (
    <div className={classes.container}>
        <h1>
          <span className={classes.htmlTag}>{'<h1> '}</span>IT Quiz
          <span className={classes.htmlTag}>{' </h1>'}</span>
        </h1>
        <p>
          Welcome to the IT Quiz! Test your knowledge and challenge yourself
          with questions from the exciting world of Information Technology. This
          quiz will cover various topics including Linux, Bash, Docker, SQL, CMS
          and more.
        </p>
        <span className={classes.readyText}>
          Are you ready to put your IT skills to the test?
        </span>
        <Button onClick={props.onGetStarted} text="Get started!" />
    </div>
  );
};

export default WelcomeScreen;
