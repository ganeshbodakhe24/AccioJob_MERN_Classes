function mergeSort(arr,start,end){
    if(arr.length<1){
        return arr;
    }
    let mid=Math.floor((start+end)/2);
    console.log(mid);
    let result1= mergeSort(arr,start,mid-1);
   let result2= mergeSort(arr,mid,end);
   let newArr=[];
    if(result1[result1.length-1]<result2[0]){
     newArr=[...result1,...result2];
    }
    else{
      newArr=[...result2,...result1];
    }
    return newArr;
}


let arr=[1,3,2555,1,2,4,443,4,4,21,2,1,11,1,1];
console.log(mergeSort(arr,0,arr.length-1));
