
// what happen by new 
//create new empty object
//set this to that object
//now add our controctor in obj prototype constructor
//return new object automaticaly

// diff betn regular function and || constructor function
//to perform some action || to crete new object
//this keyword not present || this keyword to point self 
//functionNmae() || let obj=new FunctionName()
//return statement || automaticaly obj returns

//corns at each time it create functions present in object may be mamory consume
// functions in obj performs same actions but for diff object we are creating same functions again and again mamory in efficient
//use prototype for share functions in different object of same constructure

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
    // this.increment = function () {
    //     this.count++;
    // }
    // this.decrement = function () {
    //     this.count--;
    // }
    // this.print = function () {
    //     this.countElement.textContent = this.count;
    // }
}

let counter1 = new Counter("increment1", "decrement1", "count1");
console.log(counter1);
Counter.prototype.increment = function () {
    this.count++;
}

Counter.prototype.decrement = function () {
    this.count--;
}

Counter.prototype.print = function () {
    this.countElement.textContent = this.count;

}


//we can also add function after creating an object.

counter1.initialize();


let counter2 = new Counter("increment2", "decrement2", "count2");
counter2.initialize();


//when ever access an property method 
//first find it in it's object if not present
//find it in its property not present
//then find it's parent's property
// if not find rethrn give an error

console.log(Object.hasOwn(counter1,"initialize"));

// in Object.hasOwn =>  it's object constructor own itself an function then only return true else false not check property


