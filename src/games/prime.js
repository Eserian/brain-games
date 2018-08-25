import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'Is this number prime?\nAnswer "yes" or "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeSet = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameFlow(rule, primeSet);
