//only expose what an object does but hides hot it does
class payment{
    pay(){
         throw new Error("payment method should be implement in child class")
    }
}

class CreditCard{
    pay(amount){
        console.log(`pay ${amount}`)
    }
}
class Gpay{
    // pay(amount){
    //     console.log(`pay ${amount}`)
    // }
    // pay  method not present in child class hence throw an error
}
let creditCard=new CreditCard();
creditCard.pay(222);

let gpay=new Gpay();
gpay.pay(22);