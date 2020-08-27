import readlineSync from 'readline-sync';

const maxSteps = 3;

const welcome = (rule) => {
  console.log(`Welcome to the Brain Games! \n${rule}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

export default (rule, gameSet) => {
  const userName = welcome(rule);
  const game = (step) => {
    if (step === maxSteps) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const { question, answer } = gameSet();
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
