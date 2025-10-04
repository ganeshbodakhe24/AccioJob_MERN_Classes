// let myMap=new Map();

// myMap.set(1,"ganesh");
// myMap.set(2,"raj");
// myMap.set(3,"ram");

// console.log(myMap.get(1));
// console.log(myMap.get(2));
// console.log(myMap.get(3));

// console.log(myMap.has(3));
// console.log(myMap.has(5));

// myMap.delete(1);
// console.log(myMap);
// myMap.clear();
// console.log(myMap);




function freqCount(arr){
    let myMap=new Map();
    for(let i=0;i<arr.length;i++){
        if(myMap.has(arr[i])){
            myMap.set(arr[i],myMap.get(arr[i])+1);
        }
        else{
            myMap.set(arr[i],1);
        }
    }
    console.log(myMap);
}
let arr=[10,20,10,20,30];

// freqCount(arr);


function freqCount1(arr){
    let myMap=new Map();
    for(let num of arr){
        if(myMap.has(num)) {
            myMap.set(num,myMap.get(num)+1);
        }
        else{
            myMap.set(num,1);
        }
    }
    console.log(myMap);
}
 arr=[10,20,10,20,30];

 freqCount1(arr);



 function freqCount2(str){
    let myMap=new Map();
    let maxValue=0;
    for(let char of str){
        if(char==" "){continue;}
        if(myMap.has(char) ) {
           let value= myMap.get(char)+1
            myMap.set(char,value);
            if(maxValue<value){
                maxValue=value;
            }
        }
        else{
            myMap.set(char,1);
            if(maxValue<1){
                maxValue=1;
            }
        }
    }
    console.log(myMap);
    console.log(maxValue);
}
str="hhhhhehhh    hehheheeeeeeeeeeeeeeeeeeeeeeeeeh"
 freqCount2(str);