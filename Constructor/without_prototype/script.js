
function Counter(incrementElement, decrementElement, countElement) {
    this.count = 0;
    this.incrementElement = document.getElementById(incrementElement);
    this.decrementElement = document.getElementById(decrementElement);
    this.countElement = document.getElementById(countElement);
    this.initialize = function () {
        this.incrementElement.addEventListener("click", () => {
            this.increment();
            this.print();

        })
        this.decrementElement.addEventListener("click", () => {
            this.decrement();
            this.print();
        })
    }
    this.increment = function () {
        this.count++;
    }
    this.decrement = function () {
        this.count--;
    }
    this.print = function () {
        this.countElement.textContent = this.count;
    }
}

let counter1 = new Counter("increment1", "decrement1", "count1");
counter1.initialize();

let counter2 = new Counter("increment2", "decrement2", "count2");
counter2.initialize();

// what happen by new 
//create new empty objecgt
//set this to that object
//now add our controctor in obj prototype constructor
//return new object automaticaly

// diff betn regular function and || constructor function
//to perform some action || to crete new object
//this keyword not present || this keyword to point self 
//functionNmae() || let obj=new FunctionName()
//return statement || automaticaly obj returns


