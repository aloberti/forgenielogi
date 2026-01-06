import {accountDAO} from "./accountDAO.mjs"
import {Account} from "./account.mjs"

export const accountService = {
  addAccount(lastName, firstName) {
    var newAccount = new Account(null,lastName,firstName,null)
    accountDAO.insertAccount(newAccount);
    return newAccount
  },
  getAccountList() {
    return accountDAO.retrieveAccountList()
  },
  saveAccount(id, lastName, firstName) {
    var accountList = accountDAO.retrieveAccountList()
    var indexToChange = accountList.findIndex((account)=> account.id==id)
    var accountToChange = accountList.at(indexToChange-1)
    var newAccount = new Account(accountToChange[0],"Changement",accountToChange[2],null)
    accountDAO.updateAccount(newAccount)
  },
  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};