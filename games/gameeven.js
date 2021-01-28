import readlineSync from 'readline-sync';
import { getNameGlobal, mathRandom, checkbrainEven } from '../src/index.js';

export const brainEven = () => {
  const name = getNameGlobal();
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise unswer "no".`);

  for (let i = 0; i !== 3;) {
    const getNum = mathRandom(0, 100);
    console.log(`Question: ${getNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkbrainEven(getNum, userAnswer, name)) {
      i += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
