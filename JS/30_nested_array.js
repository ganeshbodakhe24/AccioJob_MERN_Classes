let n = 3;
let m = 5;
let ptr = 1;
function printPattern1(n, m) {
    let ptr = 1;
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < m; j++) {
            str += ptr + " ";
            ptr++;
        }
        console.log(str);
    }
}

// printPattern1(n,m);

function printPattern2(n, m) {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 1; j <= m; j++) {
            str += j + (m * i) + " ";
        }
        console.log(str);
    }
}
// printPattern2(n,m);

function printArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = 0; j < arr[i].length; j++) {
            str += arr[i][j] + " ";
        }
        console.log(str);
    }
}

let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
// printArrays(arr);

function printArraysSum(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let str = "";
        for (let j = 0; j < arr[i].length; j++) {
            str += arr[i][j] + " ";
            sum += arr[i][j];
        }
        totalSum += sum;
        console.log("sum of element present in ", i, " is ", sum);
    }
    console.log("total array sum is ", totalSum);

}
// printArraysSum(arr);



// print the [sum of (prooduct of elements of each even indexed -row)];

function arrayEvenIndexProductSum(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let multiplication = 1;
        if (i % 2 == 1) {
            continue;
        }
        for (let j = 0; j < arr[i].length; j++) {
            multiplication *= arr[i][j];

        }
        totalSum += multiplication;

    }

    return totalSum;
}
// console.log(arrayEvenIndexProductSum(arr));

function printArrayByColums(arr){
      for (let j = 0; j < arr[0].length; j++) {
        let str=" ";
        for (let i = 0; i < arr.length; i++) {     
                str+=arr[i][j]+" ";
        }
        console.log(str);
    }

}
// printArrayByColums(arr);

function printDiagonals(arr){
    let diagonal=new Array();
    for(let i=0;i<arr.length;i++){
        diagonal.push(arr[i][i]);
    }
    console.log(diagonal);
    let diagonal2=new Array();
      for(let i=arr.length-1;i>=0; i--){
        diagonal2.push(arr[arr.length-1-i][i]);
    }
    console.log(diagonal2);

}
function printSecondDiagonal(arr){
    let diagonal=new Array();
    for(let i=0;i<arr.length;i++){
        diagonal.push(arr[i][arr.length-1-i]);
    } 
    console.log(diagonal)
}
arr=[[1,2,3],
     [4,5,6],
     [7,8,9]];
// printDiagonals(arr);
// printSecondDiagonal(arr);

// function to check if primary diagonal sum is odd or even

function primayDiagonalSumEvenOrOdd(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i][i];
    } 
    return sum%2==0? true :false;
}
console.log("primary diagonal sum is even ",primayDiagonalSumEvenOrOdd(arr));


function secondaryDiagonalSumEvenOrOdd(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i][arr.length-1-i];
    } 
    return sum%2==0? true :false;
}
console.log("secondary diagonal sum is even ",secondaryDiagonalSumEvenOrOdd(arr));