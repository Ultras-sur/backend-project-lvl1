import readlineSync from 'readline-sync';

// Получение случайного числа от min до max
export function mathRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Получение арифметической прогрессии
export const randomProgression = () => {
  const randFirstNum = mathRandom(1, 50);
  const arrLength = mathRandom(5, 10);
  const randomNum = mathRandom(1, 10);
  const result = [randFirstNum];
  for (let i = 0; i !== arrLength; i += 1) {
    result.push(result[i] + randomNum);
  }
  return result;
};
// Получение случайного элемента массива
function randomArrayElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
// Получение случайного оператора вычисления
export const getOperator = () => randomArrayElement(['*', '+', '-']);

// Получение имени пользователя
export const getNameGlobal = () => readlineSync.question('May I have your name? ');

// Получение наибольшего общего делителя
function gcDivisor(num1, num2) {
  let result = 1;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
}
// Получение результата к игре brain-calc
function checkOperator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  } if (operator === '*') {
    return num1 * num2;
  }
  return undefined;
}
// Проверка на простое число
function checkPrime(num) {
  for (let i = 2; i !== num + 1; i += 1) {
    if (num % i === 0 && i !== num) {
      return 'no';
    }
  }
  return 'yes';
}
// Проверка числа на четность
function checkEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

// Проверка ответа пользователя к игре brain-Even
export const checkbrainEven = (getNum, userAnswer, name) => {
  const answer = checkEven(getNum);
  if (answer === userAnswer.toLowerCase()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is '${answer}'.\nLet's try again, ${name}!`);
  return false;
};
// Проверка ответа пользователя к игре brain-Calc
export const checkBrainCalc = (num1, num2, operator, userAnswer, name) => {
  const answer = checkOperator(num1, num2, operator);
  if (answer === Number(userAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is ${answer}.\nLet's try again, ${name}!`);
  return false;
};
// Проверка ответа пользователя к игре brain-Gcd
export function checkGcd(num1, num2, userAnswer, name) {
  const answer = gcDivisor(num1, num2);
  if (Number(userAnswer) === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is ${answer}.\nLet's try again, ${name}!`);
  return false;
}
// Проверка ответа пользователя к игре brain-progression
export function checkProgression(answer, userAnswer, name) {
  if (answer === Number(userAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is ${answer}.\nLet's try again, ${name}!`);
  return false;
}
// Проверка ответа пользователя к игре brain-prime
export function checkBrainPrime(question, userAnswer, name) {
  const userAnswerLow = userAnswer.toLowerCase();
  const answer = checkPrime(question);
  if (answer === userAnswerLow) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is '${answer}'.\nLet's try again, ${name}!`);
  return false;
}
// Начало работы игра brain-Even
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
// Начало работы игра brain-gcd
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
// Начало работы игра brain-progression
export const brainProgression = () => {
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
// Начало работы игра brain-prime
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
