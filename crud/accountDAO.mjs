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
  updateAccount(account) {},
  retrieveAccount(id) {},
};