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
  saveAccount(id, lastName, firstName) {},
  getAccount(id) {},
};