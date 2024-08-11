#!/usr/bin/env node

import game from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const c = Math.min(a, b);
  const question = `${a} ${b}`;

  let correctAnswer = 1;

  for (let i = c; i >= 1; i -= 1) {
    if (a % i !== 0 || b % i !== 0) {
      i -= 1;
    } else {
      correctAnswer = i;
      break;
    }
  }

  return [question, correctAnswer.toString()];
};

export default () => {
  game(rules, generateRound);
};
