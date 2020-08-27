import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'What is the result of the expression?';

const calcSet = () => {
  let question;
  let answer;

  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const operatorSelect = getRandomNum(1, 3);

  switch (operatorSelect) {
    case 1:
      question = `${firstNum} + ${secondNum}`;
      answer = String(firstNum + secondNum);
      break;
    case 2:
      question = `${firstNum} - ${secondNum}`;
      answer = String(firstNum - secondNum);
      break;
    default:
      question = `${firstNum} * ${secondNum}`;
      answer = String(firstNum * secondNum);
      break;
  }
  return { question, answer };
};

export default () => gameFlow(rule, calcSet);
