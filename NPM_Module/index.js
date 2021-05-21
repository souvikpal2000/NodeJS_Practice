const chalk = require('chalk');
const validator = require('validator');

const validateEmail = validator.isEmail('spal62588@gmail.com');
console.log(validateEmail? chalk.green.inverse(validateEmail) : chalk.red.inverse(validateEmail));