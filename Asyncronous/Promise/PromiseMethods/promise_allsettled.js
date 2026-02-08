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

//in promise.allsetteld()
//we will get an array of objects of  responces 

// [
//   { status: 'fulfilled', value: 'success fun 1' },
//   { status: 'fulfilled', value: 'success fun 2' },
//   { status: 'fulfilled', value: 'success of fun 3' }
// ]

//there is no use of catch block in promise.allsetteld()

//all rejcted then also it will go to then block and resonce like this 
// [
//   { status: 'rejected', reason: 'error' },
//   { status: 'rejected', reason: 'error' },
//   { status: 'rejected', reason: 'error fun 3' }
// ]


Promise.allSettled([fun1(100),fun2(2000),fun3(3000)])
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)});