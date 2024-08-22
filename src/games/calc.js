import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const firstNum = getRandomInRange(1, 100);
  const secondNum = getRandomInRange(1, 100);
  const operator = getRandomOperator();

  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(calculation(firstNum, secondNum, operator));

  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';
  startGame(description, generateRound);
};
