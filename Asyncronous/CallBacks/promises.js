// promises return resole and reject
let jobPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
            // resole("job mil gai");
            reject("job nahi milli");
    },2000)
})

jobPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("i am done in this life");
})

// wrong way of write
// jobPromise.then((result)=>{
//     console.log(result);
// });

// jobPromise.catch((error)=>{
//     console.log(error);
// });

// jobPromise.finally(()=>{
//     console.log("i am done in this life");
// });