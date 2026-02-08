function fetchUserProfile(id,callback){
    if(id==1){
        callback(null,{name:"ganesh"});
    }
    else{
    callback("error occured",null);
    }
}
// callback function calll
// fetchUserProfile(1,(error,success)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(success);
//     }
// })

// promisify it 
function promisify(fun){
    return function(...arg){
        return new Promise((resolve,reject)=>{
            fun(...arg,(error,success)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(success);
                }
            })
        })
    }
}

let fetchUserProfilePromisify=promisify(fetchUserProfile);
fetchUserProfilePromisify(3).then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
