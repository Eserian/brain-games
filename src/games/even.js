import Dispatcher from '../gameDispatcher';
import getRandomNum from '../random';
import isEven from '../evenCheck';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const evenSet = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question);
  return [question, answer];
};

export default () => Dispatcher(rule, evenSet);
