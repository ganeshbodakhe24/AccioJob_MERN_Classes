function fakeApi(delay,msg,fail=false){
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
        if(fail){
            reject(msg);
        }
        resolve(msg);
    }, delay);
   })
}

let indServer=fakeApi(100,"request fulfiled in ind");
let usServer=fakeApi(200,"request fulfiled in us");
let brazilServer=fakeApi(400,"request fulfiled in brazil");

Promise.any([indServer,usServer,brazilServer])
.then((resp)=>console.log(resp))
.catch((error)=>console.log(error));