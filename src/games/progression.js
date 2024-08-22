import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, increment, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * increment);
  }
  return progression;
};

const findMissingNumber = (progression) => {
  const replacingIndex = getRandomInRange(0, progression.length - 1);
  const correctAnswer = progression[replacingIndex];
  const newProgression = [...progression];
  newProgression[replacingIndex] = '..';

  return [newProgression.join(' '), String(correctAnswer)];
};

const generateRound = () => {
  const length = getRandomInRange(5, 10);
  const start = getRandomInRange(1, 100);
  const increment = getRandomInRange(2, 10);

  const progression = generateProgression(start, increment, length);
  return findMissingNumber(progression);
};

export default () => {
  const description = 'What number is missing in the progression?';
  startGame(description, generateRound);
};
