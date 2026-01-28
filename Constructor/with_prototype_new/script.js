//creating an object by constructor function is old one
//now we use class to create na object 
class Counter {
    count = 0;
    constructor(incrementElement, decrementElement, countElement) {
        this.incrementElement = document.getElementById(incrementElement);
        this.decrementElement = document.getElementById(decrementElement);
        this.countElement = document.getElementById(countElement);

        this.incrementElement.addEventListener("click", () => {
            this.increment();
            this.print();

        })
        this.decrementElement.addEventListener("click", () => {
            this.decrement();
            this.print();
        })
    }
    increment () {
        this.count++;

    }
    decrement() {
        this.count--;
    }
    print () {
        this.countElement.textContent = this.count;
    }

    get count_(){
        return this.count;
    }
    set count_(val){
        this.count=val;
        this.print();
    }
}

let counter1=new Counter("increment1", "decrement1", "count1");
let counter2=new Counter("increment2", "decrement2", "count2");


console.log(counter1);
//automaticaly create functions into prototype
//easily read and use
//we have getters and setters
counter1.count_=3//setter
console.log(counter1.count_);//geter

