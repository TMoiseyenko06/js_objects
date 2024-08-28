function Account(accountNumber,balance,owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
    deposit = function(amount){
        balance += amount;
    };
    withdraw = function(amount){
        if (balance >= amount){
            balance -= amount;
        }else
        console.log(`Not enough fund on account ${this.accountNumber}`)
    }
    interest = function(percent){
        console.log(`The interest for this account would be ${Math.multiply(this.balance,percent)}`)
    }
};