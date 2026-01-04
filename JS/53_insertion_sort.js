function insertion_sort(arr){
    for(let i=1;i<arr.length;i++){
        let ptr=i-1;
        let temp=arr[i];
        while(ptr>=0 && temp<arr[ptr]){
               arr[ptr+1]=arr[ptr];
               ptr--;
        }
        arr[ptr+1]=temp;

    }
}
let arr=[1,2,4,21,1,455,45,2,1,3,5,3,2,444,45,6,6,43,2,54];
insertion_sort(arr);
console.log(arr);