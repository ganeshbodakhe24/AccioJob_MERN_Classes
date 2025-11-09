// function swapArrElement(arr,ind1=0,ind2=0){
//   let temp= arr[ind1];
//   arr[ind1]=arr[ind2];
//   arr[ind2]=temp;

// }
// let arr=[2,3,4,5,6,7];
// console.log({arr});
// swapArrElement(arr,1,2);
// console.log({arr})


//print an element present in odd index 

// arr=[1,2,3,4,5,6,7];
// let evenIndexEle="";
// let oddIndexEle=""
// for(let i=0;i<arr.length;i++){
//     if(i%2==0){
//         evenIndexEle+=arr[i]+" ";
//     }
//     else{
//         oddIndexEle+=arr[i] +" ";
//     }
// }
// console.log({oddIndexEle});
// console.log({evenIndexEle});

// second approach to get even an odd indexed element
let arr=[0,1,2,3,4,5,6];
let str=" ";
for(let i=0;i<arr.length;i+=2){
    str+=arr[i]+" ";
}
console.log("even indexed elements: "+str);
str=" ";
for(let i=1;i<arr.length;i+=2){
    str+=arr[i]+" ";
}
console.log("odd indexed elements: "+str);



// question swap alternate element of an arrary
//[1,2,3,4]=>[2,1,4,3]
//[1,2,3,4,5]=>[2,1,4,3,5]
arr=[1,2,3,4,5,6,7];
console.log({arr});
for(let i=0;i<arr.length-1;i+=2){
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
}
console.log("swap the pair",{arr});

// second approch 
arr=[1,2,3,4,5,6,7];
console.log({arr});
for(let i=1;i<arr.length;i+=2){
    let temp=arr[i-1];
    arr[i-1]=arr[i];
    arr[i]=temp;
}
console.log("swap the pair",{arr});