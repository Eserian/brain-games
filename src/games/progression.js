import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const arifmProgressionGen = (startNum, stepVolume, progrLength) => {
  const result = [startNum];
  for (let i = 1; i < progrLength; i += 1) {
    result[i] = result[i - 1] + stepVolume;
  }
  return result;
};

const arrToStr = array => array.join(' ');

const makeQuestion = (arr, indexToChange) => {
  const queArr = arr;
  queArr[indexToChange] = '..';
  return arrToStr(queArr);
};

const progrLength = 10;

const rule = 'What number is missing in this progression?';

const progressionSet = () => {
  const progrStart = getRandomNum(1, 100);
  const progrStep = getRandomNum(2, 10);
  const progression = arifmProgressionGen(progrStart, progrStep, progrLength);
  const numForQuestion = getRandomNum(0, 9);
  const answer = String(progression[numForQuestion]);
  const question = makeQuestion(progression, numForQuestion);
  return [question, answer];
};

export default () => gameFlow(rule, progressionSet);
