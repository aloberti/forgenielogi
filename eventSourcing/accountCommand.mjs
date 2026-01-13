import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountQueryDAO } from "./accountQueryDAO.mjs"
import { Event } from "./event.mjs"
import { eventAdd } from "./eventStore.mjs"

export const accountCommand = {
  addAccount(lastName, firstName) {
    var newAccount = new Account(null,lastName,firstName,null)
    var newEvent = new Event("AddAccount",newAccount.id,newAccount,null)
    eventAdd.addEvent(newEvent) 
    //accountCommandDAO.insertAccount(newAccount);
    //accountQueryDAO.addToCache(newAccount.id,newAccount.lastName+" "+newAccount.firstName)
    //var newQueyAccount = [newAccount.id,lastName,firstName]
    //accountQueryDAO.insertAccount(newQueyAccount)
    return newAccount
  },
  saveAccount(id, lastName, firstName) {
    const accountToChange = accountCommandDAO.restore(id)
    var newAccount = new Account(accountToChange.id,"Changement",accountToChange.firstName,null)
    var newQueyAccount = [newAccount.id,"Changement",newAccount.firstName]
    accountQueryDAO.updateCache(id,"Changement "+newAccount.firstName)
    accountQueryDAO.updateAccount(newQueyAccount)
    accountCommandDAO.updateAccount(newAccount)
  },
};