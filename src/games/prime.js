import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (number) => {
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
};

const checkIsPrime = (number) => (isPrime(number) ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomInRange(2, 30);
  const correctAnswer = checkIsPrime(question);

  return [question.toString(), correctAnswer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(description, generateRound);
};
