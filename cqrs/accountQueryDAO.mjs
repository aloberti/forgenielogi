import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    var listAccount = [];
    ACCOUNT_LIST.forEach(account => {listAccount.push([account.id,account.lastName,account.firstName])});
    return listAccount;
  },
  retrieveAccount(id) {
    var myaccount = ACCOUNT_LIST.find((acc)=>acc.id==id)
    return [myaccount.id,myaccount.lastName+" "+myaccount.firstName]
  },
};