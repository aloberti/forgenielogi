const bank = require('./bank');

const balance = bank.getBalance('1');
console.log(`Le solde est : ${balance}`);