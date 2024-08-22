import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;
const checkIsEven = (number) => (isEven(number) ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomInRange(1, 20);
  const correctAnswer = checkIsEven(question);

  return [question, correctAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(description, generateRound);
};
