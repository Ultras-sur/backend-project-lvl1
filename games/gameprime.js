import readlineSync from 'readline-sync';
import { getNameGlobal, mathRandom, checkBrainPrime } from '../src/index.js';

const brainPrime = () => {
  const name = getNameGlobal();
  console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
  for (let i = 0; i < 3;) {
    const question = mathRandom(2, 3572);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkBrainPrime(question, userAnswer, name)) {
      i += 1;
    } else {
      i += 4;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainPrime;
