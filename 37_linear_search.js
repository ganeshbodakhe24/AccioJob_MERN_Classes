function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let arr=[5,3,4,5,1];
// console.log(linearSearch(arr,4));

function isTargetPresent(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true;
        }
    }
    return false;
}

 arr=[5,3,4,5,1];
// console.log(isTargetPresent(arr,10));

function linearSearchString(str,target){
    for(let i=0;i<str.length;i++){
        if(str[i]===target){
            return i;
        }
    }
    return -1;
}

// console.log(linearSearchString("hiiraj","j"))

function searhByObjArr(users,target){
    for(let i=0;i<users.length;i++){
        if(users[i].name==target){
            return users[i].id;
        }
    }
    return null;
}
let user=[
    {id:1,name:'ganesh'},
    {id:2,name:"raj"},
    {id:3,name:"raj"}
]
console.log(searhByObjArr(user,"Raj"))