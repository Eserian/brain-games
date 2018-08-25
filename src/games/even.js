import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const evenSet = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameFlow(rule, evenSet);
