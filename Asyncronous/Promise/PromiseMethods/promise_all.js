function fun1(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success fun 1")
        },duration);
    })
}

function fun2(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success fun 2")
        },duration);
    })
}

function fun3(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("success of fun 3")
            // reject("error fun 3")
        },duration);
    })
}


//promise.all in this if all promise is resolve then and then only use execute then block and return result in array
// else if any one fail then we run catch block 
//but benifits is that all promises start executing at same time so 
//max time or return will be max time of promise  return present array 


//real life example 

//those task which not depandant to each other but all responces are required in that time we can use all 
Promise.all([fun1(100),fun2(2000),fun3(3000)])
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)});