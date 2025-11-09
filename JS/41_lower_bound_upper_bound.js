function lowerBound(arr,target){
    let left=0;
    let right=arr.length;
    let ans=-1;
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

let arr=[1,2,4,4,5,6,7];
let target=4;
console.log(lowerBound(arr,3));