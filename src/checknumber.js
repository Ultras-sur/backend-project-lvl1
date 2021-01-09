import readlineSync from 'readline-sync';

function mathRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const checknum = (getNum, userAnswer, name) => {
  if (getNum % 2 === 0 && userAnswer.toLowerCase() === 'yes'
        || getNum % 2 !== 0 && userAnswer.toLowerCase() === 'no') {
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

const checkAnswer = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise unswer "no".`);

  for (let i = 0; i !== 3;) {
    const getNum = mathRandom(100);
    console.log(`Question: ${getNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checknum(getNum, userAnswer, name)) {
      i += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default checkAnswer;
