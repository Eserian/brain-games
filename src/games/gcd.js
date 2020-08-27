import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const gcdSet = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(getGcd(firstNum, secondNum));

  return { question, answer };
};

export default () => gameFlow(rule, gcdSet);
