function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            return i;
        }
    }
    return -1;
}

// console.log(linearSearch([2,3,4,2,4,2,54,32,3,4,,3],594));


// occurances of an element in an array

function countElementOccurance(arr, target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            count++;
        }
    }
    return count;
}
// console.log("occarances of an element",countElementOccurance([1,1,1,2,3,2,1,2,3,2,],1))

function findOccarances(arr, target){
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            arr1.push(i);
        }
    }
    return arr1;
}

// console.log("element occared at index",findOccarances([1,2,2,2,3,2,2,1],2))

function findMinElement(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
// console.log("minimum element in array is ",findMinElement([1,2,-5,4,2,2,3,-1]));

function findWord(str,target){
    let arr=str.split(" ");
    for(let ele of arr){
        if(ele===target){
            return true;
        }
    }
    return false;
}
// console.log("word present in string ",findWord("i love to coding","coding"));