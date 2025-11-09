//sum of all subarrays having value of arrays length is k
let arr=[7,4,8,6,5];
let k=3;
function sumOfAllSubArr(arr,k){
    let Totalsum=0;
    for(let i=0;i<=arr.length-k;i++){
        let sum=0;
        for(let j=i;j<(i+k);j++){
                sum+=arr[j];
        }
       Totalsum+=sum;
    }
    return Totalsum;
}
// console.log(sumOfAllSubArr(arr,k));

function sumOfAllSubArrOptimize(arr,k){
    let sum=0;
    let Totalsum=0;
    for(let i=0;i<k;i++){
         sum+=arr[i];
         Totalsum=sum;
    }
    for(let i=k;i<arr.length;i++){
             sum=sum-arr[i-k]+arr[i];
             Totalsum+=sum;
    }
    return Totalsum;
}
console.log(sumOfAllSubArrOptimize(arr,k));



// print the value of 4 from array1
let array1=[arr,1,"85","rty",[2,[4,5]],32];
let array2=[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6]
]
// to check array1 is array or not
// console.log(Array.isArray(array1));

// if(Array.isArray(array1[4])){
//     if(Array.isArray(array1[4][1])){
//         console.log(array1[4][1][0]);
//     }
// }

// check array is matrix or not

function isMatrix(arr){
    if(!Array.isArray(arr[0])){
        return false;
    }
    let leng=arr[0].length;
    for(let i=1;i<arr.length;i++){
        if(arr[i].length!=leng){
            return false;
        }
    }
    return true;
}
// console.log("is array1 is Matrix ",isMatrix(array1));
// console.log("is array2 is Matrix ",isMatrix(array2));

// reverse an array
arr=[3,2,4,1,9];
// console.log(arr);
function reverseArr(arr){
    for(let i=0;i<arr.length/2;i++){
        [arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]];
    }
}
// reverseArr(arr);
// console.log(arr);

function reverse2DArr(arr){
    for(let i=0;i<arr.length;i++){
        reverseArr(arr[i]);
    }
}
array3=[
    [1,2],
    [2,3,4,5],
    [3,4,5,6]
]
// console.log({array3});
// reverse2DArr(array3);
// console.log({array3});

// reverse an columns of 2D matrix
function reverse2DCols(arr){
    for(let j=0;j<arr[0].length;j++){
        let n=arr.length;
        for(i=0;i<Math.floor(n/2);i++){
            [arr[i][j],arr[n-1-i][j]]=[arr[n-i-1][j],arr[i][j]];
        }
    }
}

array4=[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6]
]
console.log(array4);
reverse2DCols(array4);
console.log(array4);