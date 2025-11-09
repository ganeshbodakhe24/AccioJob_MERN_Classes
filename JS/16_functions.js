//it is default parameter if there is some value not provided then automaticaly taken 
function sum(a=0,b=0,c=0){
    return a+b+c;
}
console.log(sum(4,5,7));
console.log(sum(3,4));

//if any parameter not provided then it is act as undefine 
function sum2(a,b){   //sum2(4,undefine){
    return a+b;     //  NaN= 4+undefine
}
console.log(sum2(4)); //NaN



//if we provided any extra arguments but parameters are less then extra arguments are dropted out  
function sum3(a,b){   //sum2(4,4){
    return a+b;     //  8= 4+4
}
console.log(sum2(4,4,6)); //8


//function which is calculating fine on book 
// if book issued date and current date diff is greater than 10 then fine on book 3 per day else no fine on book

function fine(currentDate,issuedDate){
    return ((currentDate-issuedDate)-10)*3;
}
function library(currentDate,issuedDate){
    let daysDiff=currentDate-issuedDate;
     if(daysDiff>10){
        return fine(currentDate,issuedDate);
   }
   else{
    return 0;
   }
}

console.log("fine on book is ",library(25,2));
console.log("fine on book is ",library(25,12));
console.log("fine on book is ",library(25,22));







