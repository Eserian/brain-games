import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${Name}!`);
  return Name;
};
