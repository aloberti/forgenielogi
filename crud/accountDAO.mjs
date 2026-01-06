import { Account } from "./account.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    console.log(ACCOUNT_LIST);
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);  
  },
  retrieveAccountList() {
    var listAccount = [];
    ACCOUNT_LIST.forEach(account => {listAccount.push([account.id,account.lastName,account.firstName])});
    return listAccount;
  },
  updateAccount(account) {
    var index = ACCOUNT_LIST.findIndex((acc)=> acc.id==account.id)
    ACCOUNT_LIST[index]=account
    console.log(ACCOUNT_LIST)
  },
  retrieveAccount(id) {
    var myaccount = ACCOUNT_LIST.find((acc)=>acc.id==id)
    return [myaccount.id,myaccount.lastName+" "+myaccount.firstName]
  },
};