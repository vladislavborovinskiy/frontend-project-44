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

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${randomNumber}`);

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }
  return true;
};

const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);

  if (runPrimeGame(playerName)) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

playPrimeGame();
