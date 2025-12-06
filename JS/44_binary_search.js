function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
   while(start<=end){
    // let mid=Math.floor((start+end)/2);
      let mid=Math.floor((start+(end-start)/2));
      if(arr[mid]==target){
        return mid;
      }
      else if(arr[mid]<target){
        start=mid+1;
      }
      else if(arr[mid]>target) {
        end=mid-1;
      }
 
   }
   return -1;
}
// time complexity is O log(n);
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],1));

function findSquareRoot(term){
    let left=0;
    let right=term;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        let squareRoot=mid*mid;
        if(squareRoot==term){
            return mid;
        }
        else if(squareRoot<term){
            left=mid+1;
        }
        else if(squareRoot>term){
            right=mid-1;
        }
    
    }
    return -1;
}
// console.log(findSquareRoot(26));
//lower bound=index of first element which is >=x;
function lowerBound(arr,target){
    let left=0;
    let right=arr.length-1;
    let index=arr.length;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]==target){
            index=mid;
            right=mid-1;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else if(arr[mid]>target){
            index=mid;
            right=mid-1;

        }
    }
    return index;
}
// console.log(lowerBound([1,2,4,5,5,5,5,6],6))


function upperBound(arr,target){
    let left=0;
    let right=arr.length-1;
    let index=arr.length;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]==target){
            index=mid+1;
            left=mid+1;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else if(arr[mid]>target){
            index=mid;
            right=mid-1;

        }
    }
    return index;
}
// console.log(upperBound([1,2,4,5,5,5,5,6],6))

//efficient
function lowerBound(arr, target){
    let left = 0, right = arr.length;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] >= target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

//efficient
function upperBound(arr, target){
    let left = 0, right = arr.length;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
