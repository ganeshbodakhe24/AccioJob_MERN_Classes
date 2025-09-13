let arr=[1,4,2,4,4];
console.log(arr);

//add element in last of array
arr.push(5);
console.log(arr);

//add element in first of array
arr.unshift(6);
console.log(arr);

//delete element from last of array
arr.pop();
console.log(arr);

//delete element from array first
arr.shift();
console.log(arr);


//now search an element 
console.log("find 5 positon in array",arr.indexOf(5));//if index not present return -1 else returns index
console.log("find 4 position in arry ",arr.indexOf(4));


//write an functios to get target element index
function targetElementIndex(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
//now search an element 
console.log("find 5 positon in array",targetElementIndex(arr,5));//if index not present return -1 else returns index
console.log("find 4 position in arry ",targetElementIndex(arr,4));

// get last index of target element 
console.log("last index of 4 is ",arr.lastIndexOf(4));

// is element exist in array or not 
console.log("4 is presnet is array",arr.includes(4));
console.log("44 is presnet is array",arr.includes(44));


//find and update the value of element =10 to 14 using indexOf() and includes() method

function changeElement(arr,targetValue,changeToValue){
    if(arr.includes(targetValue)){
        arr[arr.indexOf(targetValue)]=changeToValue;
        return true;
    }
    return false;

}
console.log("targetValue changed to changedvalue",changeElement(arr,4,14));
console.log(arr);