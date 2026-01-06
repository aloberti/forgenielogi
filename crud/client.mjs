import { accountService } from "./accountService.mjs";

accountService.addAccount("Consel","Charles");
accountService.addAccount("Consel2","Charles2");

console.log(accountService.getAccountList());