const bankDAO = require('./bankDAO');

const bank = {
  getBalance(accountId) {
    const balance = bankDAO.retrieveBalance(accountId);
    return balance;
  }
};

module.exports = bank;