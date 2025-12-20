function upperBound(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]<=target){
            left=mid+1;
        }
        else{
            right=mid;
        }
    }
    return left;
}
console.log("the upper bound of element is",upperBound([1,2,3,4,5,6,7,8],8));