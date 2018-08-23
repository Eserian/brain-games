import Dispatcher from '../gameDispatcher';
import getRandomNum from '../random';
import getGcd from '../getGCD';

const rule = 'Find the greatest common divisor of given numbers.';

const gcdSet = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(getGcd(firstNum, secondNum));
  return [question, answer];
};

export default () => Dispatcher(rule, gcdSet);
