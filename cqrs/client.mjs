import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

var newacc = accountCommand.addAccount("Consel","Charles");
var newacc2 = accountCommand.addAccount("Consel2","Charles2");

console.log(accountQuery.getAccountList());

accountCommand.saveAccount(newacc.id,newacc.lastName,newacc.firstName)

console.log(accountQuery.getAccount(newacc2.id))