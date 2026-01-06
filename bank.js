const [bankDAO,debit] = require('./bankDAO');
const transfer = require('./bankTransfer')
const bank = {
  getBalance(accountId) {
    const balance = bankDAO.retrieveBalance(accountId);
    return balance;
  }
};

function transferMoney(accountId,amount){
    if (transfer(accountId,amount)){
        debit(accountId,amount)
    }
}
module.exports = [bank,transferMoney];