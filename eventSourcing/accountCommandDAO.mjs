import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    console.log(ACCOUNT_LIST);
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);  
  },
  updateAccount(account) {
    var index = ACCOUNT_LIST.findIndex((acc)=> acc.id==account.id)
    ACCOUNT_LIST[index]=account
    console.log(ACCOUNT_LIST)
  },
  restore(id) {
    //var myaccount = ACCOUNT_LIST.find((acc)=>acc.id==id)
    return ACCOUNT_LIST.find((acc)=>acc.id==id)
  },
};