import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'Balance the given number.';

const strBalance = (str) => {
  let result = '';
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = Number(str[i]);
  }
  const arrBalance = (array) => {
    const bArr = array;
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
  arrBalance(arr);
  result = arr.join('');
  return result;
};

const balanceSet = () => {
  const question = getRandomNum(1, 10000);
  const answer = strBalance(String(question));
  return [question, answer];
};

export default () => gameFlow(rule, balanceSet);
