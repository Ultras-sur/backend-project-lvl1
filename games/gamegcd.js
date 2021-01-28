import readlineSync from 'readline-sync';
import { getNameGlobal, mathRandom, checkGcd } from '../src/index.js';

export const brainGcd = () => {
  const name = getNameGlobal();
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
  for (let i = 0; i !== 3;) {
    const num1 = mathRandom(1, 50);
    const num2 = mathRandom(1, 50);
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkGcd(num1, num2, userAnswer, name)) {
      i += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
