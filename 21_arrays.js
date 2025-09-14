n=7;
//l1
for(let i=0;i<(Math.floor(n/2));i++){
    // print spaces
    let str="";
    for(let j=i;j<(Math.floor(n/2));j++){
        str+="  ";
    }
    for(let j=0;j<=i*2;j++){
        str+="* ";
    }
    console.log(str);
}


//l2
let str="";
for(let i=0;i<n;i++){
    str+="* ";
}
console.log(str);

//l3
for(let i=0;i<(Math.floor(n/2));i++){
    let str="";
    for(let j=0;j<=i;j++){
        str+="  ";
    }
    for(let j=(i*2)+1;j<Math.floor(n/2)*2;j++){
        str+="* ";
    }
    console.log(str);
}


