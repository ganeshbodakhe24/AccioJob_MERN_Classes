// import type
// barrel import 
// import {sum,union} from "./lib/index.js";
// sum();
// union();



import { hello,count,increment } from "./script.js";//to import module


import counter from "./script.js";//at this time export what is value of counter will get it not a live value //default export


import { hello as hii} from "./script.js";// get hello function as hii name
// hii(); //it is acualy hello() function in script.js 


import x ,* as exportedFun from "./script.js";
// here x is default export 
//exportedFun have all functions,varialbes that are exported
// console.log({x});
// exportedFun.hello();

// let count=3;//give error as count already define


function print(){
    hello();
}
print();

// count++;//like this way we can't change value of module variable it is read only


console.log({counter});
console.log({count});

increment();

console.log({counter});
console.log({count});




// default                                 named
// one for module                        multiple
//any name can give in import file       has to give an exported name
////vlaue at time will get               live/ latest value 

