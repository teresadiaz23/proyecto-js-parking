import pkg from 'readline-sync';

let userName = pkg.question('May I have your name? ');
console.log('Hi ' + userName + '!');