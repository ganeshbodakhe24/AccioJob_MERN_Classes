let arr = [1, 4, 5, 7, 3, 2];
//subarray is contigious element from an array
//[1] ,[4],[5],[7],[3],[2]

// print loop
// for(let i=0;i<arr.length;i++){
//     let str="";
//     for(let j=i;j<arr.length;j++){
//         for(let k=i;k<=j;k++){
//             str+=arr[k]+" ";
//         }
//             console.log(str);
//              str="";

//     }
//     console.log();
// }


function printSubArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = i; j < arr.length; j++) {
            str += arr[j] + " ";
            console.log(str);
        }
    }
}


function printSubArray1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let subArr = new Array;
        for (let j = i; j < arr.length; j++) {
            subArr.push(arr[j]);
            console.log(subArr.join(" "));
        }
    }
}

function printSubArray2(arr) {
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = i; j < arr.length; j++) {
           
            console.log(arr.slice(i,j).join(" "));
        }
    }
}
// printSubArray(arr);
// printSubArray2(arr);

// function to print the sumof all subarrays

function printSubArraysum(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let str = "";
        for (let j = i; j < arr.length; j++) {
            str += arr[j] + " ";
            sum += arr[j];
            console.log(str + "  => " + sum);
            totalSum += sum;
        }
    }
    return
}
// printSubArraysum(arr);



//time complexity O(n^2)
// optimize time complexity is O(n)
function printTargetSumSubArr(arr,target) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let str = "";
        for (let j = i; j < arr.length; j++) {
            str += arr[j] + " ";
            sum += arr[j];
            if(sum==target){
               console.log(str + "  => " + sum);
            }
        }
    }
    return
}

printTargetSumSubArr(arr,17);