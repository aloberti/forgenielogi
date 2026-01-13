import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
  addToCache(id,name){
    accountCache[id]=name
    console.log(accountCache)
  },
  updateCache(id,newname){
    accountCache[id]=newname
    console.log(accountCache)
  },
  insertAccount(account) {
      console.log(accountSummaryList);
      accountSummaryList.push(account);
      console.log(accountSummaryList);  
  },
  updateAccount(account) {
      var index = accountSummaryList.findIndex((acc)=> acc[0]==account[0])
      accountSummaryList[index]=account
      console.log(accountSummaryList)
  },
  retrieveAccountList() {
    var listAccount = [];
    accountSummaryList.forEach(account => {listAccount.push([account[0],account[1],account[2]])});
    return listAccount;
  },
  retrieveAccount(id) {
    //var myaccount = accountSummaryList.find((acc)=>acc[0]==id)
    //console.log(myaccount)
    //return [myaccount[0],myaccount[1]+" "+myaccount[2]]
    var myname = accountCache[id]
    console.log(myname)
    return [id,myname]
  },
};