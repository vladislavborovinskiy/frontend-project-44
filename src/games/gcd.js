import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const findGCD = (num1, num2) => {
  const minNum = Math.min(num1, num2);

  for (let i = minNum; i >= 1; i -= 1) {
    if (num1 % i !== 0 || num2 % i !== 0) {
      i -= 1;
    } else {
      return i;
    }
  }

  return 1;
};

const generateRound = () => {
  const firstNum = getRandomInRange(1, 100);
  const secondNum = getRandomInRange(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = findGCD(firstNum, secondNum).toString();

  return [question, correctAnswer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, generateRound);
};
