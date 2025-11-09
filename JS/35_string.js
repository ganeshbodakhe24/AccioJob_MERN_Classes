let str="this is my name";
let str1='this is raj';  //if have to write this 'this is raj's phone' will throw an error for this we ahve back ticks
let str2=`this this ram`;
console.log(str);
console.log(str1);
console.log(str2);


//strings are immutables
let words="hi how was you day";
 let count=1;
for(let i=0;i<words.length;i++){
        if(words[i]==" "){
            count++;
        }
}

console.log(count);
console.log("hii presnet",words.includes("hi"));// will return ana true if char/subStr present
console.log("Hi present",words.includes("Hi"));//case sensitive in nature

let str4="shoes";
console.log(str4.replace("s","d"))//will return an new string // replace is replace first founded str/char only

let str5="show";//return a new string doesn't change the original one 
console.log(str5.replaceAll("s","a"));//will replace all char/str found in sting

//trim()->remove an all leading and trailing spaces
let str6="    ganesh bodakhe";
console.log(str6.trim());//it is usefull to remove an extral spaces from staring or ending positions


//sub string
console.log("this is string");
console.log("abhishek".substring(4,6));// 4 to  5 //6 is excluded
console.log("abhisheck".substring(5));//if only one para then that point to last
console.log("abhishek".substring(-3));//from 0 to last length even -ve starting point alws start with 0
console.log("abhishek".substring(2));//start to 2 to str length
console.log("abhishek".substring(-2));//will start from o to str length
console.log("abhishek".substring(2,5))// [2, 5) firth exclude
console.log("abhishek".substring(-4,6))// [0,6);
console.log("abhisheck".substring(5,2))// wil swap [5,2] => to [2,5]; =>[2,5); 
console.log("abhishek".substring(3,-5))//will swap[3,-5]=> to [-5,3]=>[0,3);


// slice
console.log("acciojob".slice(2));
console.log("acciojob".slice(-2));//will return 2 ele from end string
console.log("acciojob".slice(7,-2))//will return[7 to end str 2
// console.log("acciojob".slice(5,3)); //will return nothing


//repeat
console.log("hif".repeat(3));
console.log("abc".repeat(3.4));// will repeat to 3 times
// console.log("abc".repeat(-4));// will be throw an error 

//char at 3
console.log("abeeec".charAt(3));
console.log("abc".charAt(-2));// will return noting


// indexOf()
// console.log("hii this is d".indexOf("d"));//if not present then return -1

// console.log("ddd bhbbd".indexOf("d",3))//here find d after 3 index
console.log("ae".__proto__)
