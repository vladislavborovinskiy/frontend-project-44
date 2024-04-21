#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = (playerName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log(`Question: ${randomNumber}`);

  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    if (runPrimeGame(playerName)) {
      correctAnswers += 1;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playPrimeGame();
