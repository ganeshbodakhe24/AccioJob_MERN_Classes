Promise.reject("error occured").catch(console.log);
Promise.reject("second error occured").catch((error)=>{console.log(error)});