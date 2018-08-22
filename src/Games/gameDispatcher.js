import readlineSync from 'readline-sync';
import welcome from '../welcome';
import getRandomNum from '../random';
import isEven from '../evenCheck';

const maxSteps = 3;

export default () => {
  const userName = welcome();
  const game = (step) => {
    if (step === maxSteps) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const question = getRandomNum(1, 100);
    const answer = isEven(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      game(step + 1);
    } else if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}' \nLet's try again, ${userName}!`);
    }
  };
  game(0);
};
