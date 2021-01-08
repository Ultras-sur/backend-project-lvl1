import readlineSync from 'readline-sync';

const name = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  return nameUser;
};

export default name;
