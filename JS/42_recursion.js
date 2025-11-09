//print number from 4 -1
let n=0;
let start=0;
function printNto1(n){
    if(n===0){
        return;
    }
    console.log(n);
    printNto1(n-1);
}
// printNto1(5);


//from 1 to n
function print1ToN(i,n){
    if(i==n+1){
        return;
    }
    console.log(i);
    print1ToN(i+1,n);
}
n=10;
start=1;
// print1ToN(start,n);

function printStr(str,n){
    if(n<1){
        return;
    }
        console.log(str);
        printStr(str,n-1);
}
n=5;
// printStr("hello",n);

//two way path function recursion 1234321
 function twoWayPattern(n,current=1){
    if(current>n){
        return;
    }
    console.log(current);
     twoWayPattern(n,current+1);
    console.log(current);
   
}

// twoWayPattern(n);
//

function twoWayPatternReverse(n){
    if(n<=0){
        return;
    }
    console.log(n);
    twoWayPatternReverse(n-1);
    console.log(n);
}
n=5;
// twoWayPatternReverse(5);
function naturalNnumberSum(n){
    if(n<=0){
        return 0;
    }
    return n+naturalNnumberSum(n-1);
}

// console.log(naturalNnumberSum(5));

//find the power of a number x**3

function power(n,k){
    if(k<=1){
        return n;
    }
     return n*power(n,k-1);
}
// console.log(power(2,3));

//reverse
function revStr(str,rev){
    if(str.length==0){
        return rev;
    }
    rev+=str[str.length-1];
    return revStr(str.slice(0,str.length-1),rev);

}
// console.log(revStr("Hello",""));
function  revStr1(str){
     if(str===""){
        return "";
    }
    return  revStr1(str.slice(1))+str[0];

}
// console.log(revStr1("Hello"));

function fibo(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibo(n-1)+fibo(n-2);
}
// console.log(fibo(5));

function factorial(n){
    if(n==1){
        return 1;
    }
    return factorial(n-1)*n;
}
console.log(factorial(5));



