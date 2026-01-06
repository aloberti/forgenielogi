import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    var newAccount = new Account(null,lastName,firstName,null)
    accountCommandDAO.insertAccount(newAccount);
    return newAccount
  },
  saveAccount(id, lastName, firstName) {
    const accountToChange = accountCommandDAO.restore(id)
    var newAccount = new Account(accountToChange.id,"Changement",accountToChange.firstName,null)
    accountCommandDAO.updateAccount(newAccount)
  },
};