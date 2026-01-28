//by encapsulation we hide data 
//we need methods to set and get data of variable

class Account{
    #amount;
    constructor(amount){
        this.#amount= amount;
    }
    setAmount(amount){
        if(amount>0){
            this.#amount+=amount;
        }
        else{
             console.warn("amt should be greater than 0");

        }
    }
    getAmount(){
        return this.#amount;
    }
}

let account =new Account(33);
console.log(account.getAmount());
account.setAmount(33);
console.log(account.getAmount());
account.setAmount(0);
