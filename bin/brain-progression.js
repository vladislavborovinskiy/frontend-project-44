#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
  console.log('What number is missing in the progression?');

  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);

  const hiddenProgressionObject = hideNumberInProgression([...progression], hiddenIndex);
  const { progression: hiddenProgression, hiddenValue } = hiddenProgressionObject;

  console.log(`Question: ${formatProgression(hiddenProgression)}`);

  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

  if (userAnswer === hiddenValue) {
    console.log('Correct!');
    return true;
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    if (runProgressionGame(playerName)) {
      correctAnswers += 1;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playProgressionGame();
