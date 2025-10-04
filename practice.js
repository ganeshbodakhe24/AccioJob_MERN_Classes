function printDiamond( n){
    //   *
//  * *
// *   *
//*     *
// *   *
//  * *
//   *

for(let i=0;i<n;i++){
    let line="";
   for(let j=1;j<n-i;j++){
    line+=" ";
   }
   if(i!=0){
    line+="*";
   }
   for(let j=0;j<(2*i)-1;j++){
    line+=" ";
   }
   line+="*";

   console.log(line);
}
// *   *
//  * *
//   *
let count=n-1;
for(let i=0;i<n-1;i++){
    let line="";
    for(let j=0;j<=i;j++){
        line+=" ";
    }
    if(i!=n-2){
        line+="*";
    }
    
    for(let j=2;j<(n-1-i)*2;j++){
        line+=" ";
    }
    count-=2;
    line+="*";
    console.log(line);
}
}

// printDiamond(10);
let a = 10
var b = 20
function hello(){
  console.log("2", b);
  console.log("1", a) 
  console.log("3", a) 
  console.log("4", b) 

}
hello();