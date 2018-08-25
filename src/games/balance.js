import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'Balance the given number';

const strToArr = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    result[i] = Number(str[i]);
  }
  return result;
};

const arrBalancing = (arrayToBalance) => {
  const result = arrayToBalance.slice().sort();
  const lastElement = result.length - 1;
  const firstElement = 0;
  while (result[lastElement] - result[firstElement] > 1) {
    result[firstElement] += 1;
    result[lastElement] -= 1;
    result.sort();
  }
  return result;
};

const numBalancing = (numToBalance) => {
  const str = String(numToBalance);
  const arr = strToArr(str);
  const balaceArr = arrBalancing(arr);
  return balaceArr.join('');
};

const balanceSet = () => {
  const question = getRandomNum(1, 10000);
  const answer = numBalancing(question);
  return [question, answer];
};

export default () => gameFlow(rule, balanceSet);
