
function binarySearchFirstOccarance(arr,target){
    let left=0;
    let right=arr.length-1;
    let temp=-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target){
            temp=mid;
            right=mid-1;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return temp;
}
let arr=[1,2,4,4,5,6,6,7];
arr=["apple","banana","banana","cherry","date"];

console.log(binarySearchFirstOccarance(arr,"date"))