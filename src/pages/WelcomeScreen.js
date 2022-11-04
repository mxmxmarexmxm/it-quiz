import classes from './WelcomeScreen.module.css';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const WelcomeScreen = (props) => {
  return (
    <div className={classes.container}>
      <Card>
        <h1>IT Quiz</h1>
        <h3>Test your programming knowledge!</h3>
        <Button onClick={props.onGetStarted} text='Get started!' />
      </Card>
    </div>
  );
};

export default WelcomeScreen;
