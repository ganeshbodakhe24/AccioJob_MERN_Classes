function fun1(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("error fun 2")

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


//promise.any in this if any first promise is resolve then imediately return output in then
// else if all  fail then we run catch block 
//but benifits is that all promises start executing at same time so 
//those promise return resolve result print this into then block

//real life 
//if we have server in all world same request send to all server 
//those who return responce first then we will print it's responce on further processing of other server responce
//if any one server fail no matter because we have other servers also


Promise.any([fun1(100),fun2(2000),fun3(3000)])
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)});

// alternate way to write 
// Promise.any([fun1(100),fun2(200),fun3(200)])
// .then(console.log)
// .catch(console.log)