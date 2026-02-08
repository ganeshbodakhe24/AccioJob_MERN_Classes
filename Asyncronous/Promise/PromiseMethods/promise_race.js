function fun1(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success fun 1")
            reject("error");
        },duration);
    })
}

function fun2(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //   reject("error");
            resolve("success fun 2")
        },duration);
    })
}

function fun3(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("success of fun 3")
            reject("error fun 3")
        },duration);
    })
}


function timeOut(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //  resolve("success of fun 3")
            reject(" unable to fetch data from urls time out error")
        },duration);
    })
}

//in promise.race()
//those who first resolve or reject will return 
// those whose promise execute first 
// no matter it resolve or reject will execute first

//real life example

//we have time out function in it we have 2 sec time out if any one function in array of promise will fail to get resonce it 2 s
//then we will return time out erro

Promise.race([fun1(100),fun2(2000),fun3(3000),timeOut(100)])
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)});