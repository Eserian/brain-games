import readlineSync from 'readline-sync';

export default (rule) => {
  console.log(`Welcome to the Brain Games! \n${rule}`);
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${Name}!`);
  return Name;
};
