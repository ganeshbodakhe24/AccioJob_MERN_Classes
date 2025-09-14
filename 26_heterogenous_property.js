let arr=[1,2,"123",2.344,true,[3,4,"five",[2,5,"printMe"]]];
console.log(arr[5][3][2]);

function findElement(arr,target){
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])=="object"){
          return findElement(arr[i],target);
        }
       else if(arr[i]==target){
            return true;
        }
    }
    return false;
}

console.log(arr.includes("printMe"))
console.log(findElement(arr,4));