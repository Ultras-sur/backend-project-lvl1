import readlineSync from 'readline-sync';

// Получение случайного элемента массива
function randomArrayElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
// Получение опретора вычисления
const getOperator = () => randomArrayElement(['*', '+', '-']);

// Получение имени пользователя
const getNameGlobal = () => readlineSync.question('May I have your name? ');
// Получение случайного числа до max
function mathRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
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
// Проверка ответа пользователя к игре Brain-Even
const checkbrainEven = (getNum, userAnswer, name) => {
  if ((getNum % 2 === 0 && userAnswer.toLowerCase() === 'yes')
        || (getNum % 2 !== 0 && userAnswer.toLowerCase() === 'no')) {
    console.log('Correct!');
    return true;
  } if (getNum % 2 !== 0 && userAnswer.toLowerCase() === 'yes') {
    console.log(`'${userAnswer}' is wrong ;(. Correct answer is 'no'.\nLet's try again, ${name}!`);
  } if (getNum % 2 === 0 && userAnswer.toLowerCase() === 'no') {
    console.log(`'${userAnswer}' is wrong ;(. Correct answer is 'yes'.\nLet's try again, ${name}!`);
  }
};
// Проверка ответа пользователя к игре Brain-Calc
const checkBrainCalc = (question, userAnswer, name) => {
  const answer = eval(question);
  if (answer === Number(userAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is ${answer}.\nLet's try again, ${name}!`);
};
// Проверка ответа пользователя к игре Brain-Gcd
function checkGcd(num1, num2, userAnswer, name) {
  const answer = gcDivisor(num1, num2);
  if (Number(userAnswer) === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong ;(. Correct answer is ${answer}.\nLet's try again, ${name}!`);
}
// Начало работы игра Brain-Even
export const brainEven = () => {
  const name = getNameGlobal();
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise unswer "no".`);

  for (let i = 0; i !== 3;) {
    const getNum = mathRandom(100);
    console.log(`Question: ${getNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkbrainEven(getNum, userAnswer, name)) {
      i += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
// Начало работы игра Brain-Calc
export const brainCalc = () => {
  const name = getNameGlobal();
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
  for (let i = 0; i !== 3;) {
    const question = `${mathRandom(20)} ${getOperator()} ${mathRandom(20)}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkBrainCalc(question, userAnswer, name)) {
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
    const num1 = mathRandom(50);
    const num2 = mathRandom(50);
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkGcd(num1, num2, userAnswer, name)) {
      i += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
