let n=7;
let flag=true;
for(let i=2;i*i<=n;i++){
    if(n%i==0){
            flag=false;
            break;
    }
}
if(flag){
    console.log(n,"is prime number");
}
else{
    console.log(n,"is no prime number");
}

