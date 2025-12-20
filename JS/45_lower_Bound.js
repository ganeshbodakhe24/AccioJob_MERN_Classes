function lowerBound(arr,target){
    let left=0;
    let ans=arr.length-1;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]>=target){
            ans=mid;
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return ans;
}
let arr=[2,3,3,3,5,7,9];
let target=3;
console.log(lowerBound(arr,target));

function upperBound(arr,target){
    let left=0;
    let ans=arr.length;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]>target){
            ans=mid;
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return ans;
}
 arr=[2,3,3,3,5,7,9];
 target=3;
console.log(lowerBound(arr,target));