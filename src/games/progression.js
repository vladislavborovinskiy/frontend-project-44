import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (increment, start, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * increment);
  }
  return progression;
};

const findMissingNumber = (progression, increment) => {
  const replacingElement = '..';
  const randomIndex = getRandomInRange(0, progression.length - 1);
  const newProgression = [...progression];
  newProgression[randomIndex] = replacingElement;

  let correctAnswer;
  if (randomIndex === 0) {
    correctAnswer = newProgression[1] - newProgression[0];
  } else {
    correctAnswer = newProgression[randomIndex - 1] + increment;
  }

  return [newProgression.join(' '), String(correctAnswer)];
};

const generateRound = () => {
  const length = getRandomInRange(5, 10);
  const start = getRandomInRange(1, 100);
  const increment = getRandomInRange(2, 10);

  const progression = generateProgression(increment, start, length);
  return findMissingNumber(progression, increment);
};

export default () => {
  const description = 'What number is missing in the progression?';
  startGame(description, generateRound);
};
