import gameFlow from '../gameFlow';
import getRandomNum from '../utils';

const rule = 'What number is missing in this progression?';

const progressionLength = 10;

const arifmProgressionGen = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = start + step * i;
  }
  return result;
};

const makeQuestion = (arr, indexToChange) => {
  const arrForQuestion = arr.slice();
  arrForQuestion[indexToChange] = '..';
  return arrForQuestion.join(' ');
};

const progressionSet = () => {
  const progressionStart = getRandomNum(1, 100);
  const progressionStep = getRandomNum(2, 10);
  const progression = arifmProgressionGen(progressionStart, progressionStep, progressionLength);
  const numForQuestion = getRandomNum(0, 9);
  const question = makeQuestion(progression, numForQuestion);
  const answer = String(progression[numForQuestion]);
  return [question, answer];
};

export default () => gameFlow(rule, progressionSet);
