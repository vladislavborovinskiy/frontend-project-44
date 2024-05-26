#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../src/utils.js';

const calculateExpression = (expr) => {
  const [num1, operator, num2] = expr.split(' ');
  switch (operator) {
    case '+':
      return parseInt(num1, 10) + parseInt(num2, 10);
    case '-':
      return parseInt(num1, 10) - parseInt(num2, 10);
    case '*':
      return parseInt(num1, 10) * parseInt(num2, 10);
    default:
      throw new Error('Unknown operator');
  }
};

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateExpression(question).toString();
  return { question, correctAnswer };
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();
