import { getNameGlobal, mathRandom, checkBrainPrime } from '../src/index.js';
import readlineSync from 'readline-sync';

export const brainPrime = () => {
    const name = getNameGlobal();
    console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
    for (let i = 0; i !== 3;) {
      const question = mathRandom(2, 3572);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (checkBrainPrime(question, userAnswer, name)) {
        i += 1;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };