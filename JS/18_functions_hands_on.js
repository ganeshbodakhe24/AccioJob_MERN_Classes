// write a function to find the factorial of the numbeer
function factorial(a=0){
    let value=1;
    for(let i=2;i<=a;i++){
            value=value*i;
    }
    return value;
}

console.log("factorial of number",factorial(1));

// write a function to find the average of three numbers
function avg(a=0,b=0,c=0){
    return Math.floor((a+b+c)/3);
}
console.log("avg of three number",avg(3,8,3,));


//write a program to find nCr
// nc4=n!/(n-r)!.r!

function nCr(n=0,r=0){
    let nFactorial=factorial(n);
    let rFactorial=factorial(r);
    let c=factorial(n-r);
    return Math.floor(nFactorial/(rFactorial*c));
    // also can write as
    return factorial(n)/factorial(r)*factorial(n-r);
}
console.log("nCr",nCr(0,0));


