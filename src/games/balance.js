import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'Balance the given number.';

const strToArr = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = Number(str[i]);
  }
  return arr;
};

const arrBalance = (arrayToBalance) => {
  const bArr = arrayToBalance;
  bArr.sort();
  const lastElement = bArr.length - 1;
  const firstElement = 0;
  if (bArr[lastElement] - bArr[firstElement] > 1) {
    bArr[firstElement] += 1;
    bArr[lastElement] -= 1;
    return arrBalance(bArr);
  }
  return bArr;
};

const arrToStr = array => array.join('');

const balanceSet = () => {
  const question = getRandomNum(1, 10000);
  const answer = arrToStr(arrBalance(strToArr(String(question))));
  return [question, answer];
};

export default () => gameFlow(rule, balanceSet);
