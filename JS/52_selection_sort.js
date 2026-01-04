function selection_sort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minInd=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[minInd]>arr[j]){
                minInd=j;
            }
        }
        [arr[i],arr[minInd]]=[arr[minInd],arr[i]];
    }
}

let arr =[33,22,11,5,332,66,5,3,2];
selection_sort(arr);
console.log(arr);