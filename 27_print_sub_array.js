let arr=[1,4,5,7,3,2];
//subarray is contigious element from an array
//[1] ,[4],[5],[7],[3],[2]

// print loop
for(let i=0;i<arr.length;i++){
    let str="";
    for(let j=i;j<arr.length;j++){
        for(let k=i;k<j;k++){
            str+=arr[k]+" ";
        }
            console.log(str);
    }
}