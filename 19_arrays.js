const name1="name1"
const name2="name2"
const name3="name3"
const name4="name4"
const name5="name5"
const name6="name6"
const name7="name7"

// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);
// console.log(name5);
// console.log(name6);
// console.log(name7);

// we have to create an lot of variales to store an same type of data
// to avoid this we use arrays

let arr=["sham","ram","geeta","sita","krushna","mahesh"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// sum of an numbers
let arr1=[1,2,3,4,5,6,7,8];
// console.log("sum of arrays elements are",sumOfArray(arr1));
function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

//find the absolute difference of (sum of all odd elements and sum of all even elements )
function absoluteDiff(arr){
    let evenNumbersSum=0;
    let oddNumbersSum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenNumbersSum+=arr[i];
        }
        else{
            oddNumbersSum+=arr[i];
        }
    }
    return Math.abs(evenNumbersSum-oddNumbersSum);
}

let arr2=[1,2,3,4,5,6,7,8,15];
// console.log("the absolute diff betn even and odd numbers sum is ",absoluteDiff(arr2));
//O(arr.length)->time complexity


// your'are give an array elements write a function which print in below manner
// if there's a multiple of 3 print Fizz
// if there's multiple of 5 print buzz
// if there's a multiple of both 3 and 5 print fizzBuzz

function fizzBuzz(arr){
    for(let i=0;i<arr.length;i++){

    if(arr[i]%3==0 && arr[i]%5==0){
        console.log(arr[i],"FizzBuzz");
    }
    else if(arr[i]%3==0){
        console.log(arr[i],"Fizz");
    }
    else if(arr[i]%5==0){
        console.log(arr[i],"Buzz");
    }
    else{
      console.log(arr[i],"No responce");
    }
    }
}
let arr3=[1,2,3,4,5,6,7,8,15];
fizzBuzz(arr3);

