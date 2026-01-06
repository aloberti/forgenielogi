import { accountService } from "./accountService.mjs";

var newacc = accountService.addAccount("Consel","Charles");
var newacc2 = accountService.addAccount("Consel2","Charles2");

console.log(accountService.getAccountList());

accountService.saveAccount(newacc.id,newacc.lastName,newacc.firstName)

console.log(accountService.getAccount(newacc2.id))