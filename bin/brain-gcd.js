#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  return { num1, num2 };
};

const startGame = () => {
  console.log(
    'Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.'
  );

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const totalQuestions = 3;
  let correctAnswers = 0;

  for (let i = 0; i < totalQuestions; i += 1) {
    const { num1, num2 } = generateQuestion();
    console.log(`Question: ${num1} ${num2}`);

    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    const correctAnswer = gcd(num1, num2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
    }
  }

  console.log(
    `Congratulations, ${playerName}! You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`
  );
};

startGame();
