import readlineSync from 'readline-sync';

const rounds = 3;

export default (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
