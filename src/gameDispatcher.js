import readlineSync from 'readline-sync';
import welcome from './welcome';

export default (textRule, gameSet) => {
  const maxSteps = 3;
  const userName = welcome(textRule);
  const game = (step) => {
    if (step === maxSteps) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const [question, answer] = gameSet();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      game(step + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}' \nLet's try again, ${userName}!`);
  };
  game(0);
};
