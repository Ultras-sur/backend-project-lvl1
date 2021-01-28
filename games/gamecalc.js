import { getNameGlobal, getOperator, mathRandom, checkBrainCalc } from '../src/index.js';
import readlineSync from 'readline-sync';
    
export const brainCalc = () => {
    const name = getNameGlobal();
    console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
    for (let i = 0; i !== 3;) {
      const num1 = mathRandom(0, 20);
      const num2 = mathRandom(0, 20);
      const operator = getOperator();
      const question = `${num1} ${operator} ${num2}`;
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (checkBrainCalc(num1, num2, operator, userAnswer, name)) {
        i += 1;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };