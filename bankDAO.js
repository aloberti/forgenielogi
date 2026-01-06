const bankDAO = {
    retrieveBalance(accountId) {
        console.log(`Retrieve balance for account ${accountId}`);
    
        const balances = {
            '1': 1000,
            '2': 2500,
            '3': 500,
        };
    
        return balances[accountId];
    }
};

function debitAccount(accountId,amount){
    console.log("Debit money")
}

module.exports = [bankDAO,debitAccount];