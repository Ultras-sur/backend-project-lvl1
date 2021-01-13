import readlineSync from 'readline-sync';
// Получение опретора вычисления
const getOperator = () => randomArrayElement(['*', '+', '-']);

// Получение имени пользователя
const getNameGlobal = () => readlineSync.question('May I have your name? ');

// Получение случайного элемента массива
function randomArrayElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
// Получение случайного числа до max
function mathRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
// Проверка ответа пользователя к игре Brain-Even
const checkbrainEven = (getNum, userAnswer, name) => {
  if ((getNum % 2 === 0 && userAnswer.toLowerCase() === 'yes')
        || (getNum % 2 !== 0 && userAnswer.toLowerCase() === 'no')) {
    console.log('Correct!');
    return true;
  } if (getNum % 2 !== 0 && userAnswer.toLowerCase() === 'yes') {
    console.log(`'${userAnswer}' is wrong ;(. Correct answer is 'no'.\nLet's try again, ${name}!`);
    return false;
  } if (getNum % 2 === 0 && userAnswer.toLowerCase() === 'no') {
    console.log(`'${userAnswer}' is wrong ;(. Correct answer is 'yes'.\nLet's try again, ${name}!`);
    return false;
  }
};
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
// Проверка ответа пользователя к игре Brain-Calc
const checkBrainCalc = (question, userAnswer, name) => {
  if (eval(question) === Number(userAnswer)) {
    console.log('Correct!');
    return true;
  } if (eval(question) !== Number(userAnswer)) {
    console.log(`'${userAnswer}' is wrong ;(. Correct answer is ${eval(question)}.\nLet's try again, ${name}!`);
    return false;
  }
};
