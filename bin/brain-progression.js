#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../src/utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideNumberInProgression = (progression, hiddenIndex) => {
  const progressionCopy = [...progression];
  progressionCopy[hiddenIndex] = '..';
  return { progression: progressionCopy, hiddenValue: progression[hiddenIndex] };
};

const formatProgression = (progression) => progression.join(' ');

const runProgressionGame = (playerName) => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomInt(0, length - 1);

  const hiddenProgressionObject = hideNumberInProgression([...progression], hiddenIndex);
  const { progression: hiddenProgression, hiddenValue } = hiddenProgressionObject;

  console.log(`Question: ${formatProgression(hiddenProgression)}`);

  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

  if (userAnswer === hiddenValue) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  let gameOver = false;

  while (correctAnswers < 3 && !gameOver) {
    if (runProgressionGame(playerName)) {
      correctAnswers += 1;
    } else {
      gameOver = true;
    }
  }

  if (!gameOver) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

playProgressionGame();
