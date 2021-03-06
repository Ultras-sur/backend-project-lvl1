import readlineSync from 'readline-sync';
import {
  getNameGlobal, mathRandom, checkProgression, randomProgression,
} from '../src/index.js';

const brainProgression = () => {
  const name = getNameGlobal();
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
  for (let i = 0; i < 3;) {
    const question = randomProgression();
    const indexOfElement = mathRandom(0, question.length - 1);
    const answer = question[indexOfElement];
    question[indexOfElement] = '..';
    console.log(`Question: ${question.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkProgression(answer, userAnswer, name)) {
      i += 1;
    } else {
      i += 4;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainProgression;
