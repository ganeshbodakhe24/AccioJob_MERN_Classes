function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                resolve({ name: "ganesh" });
            }
            else {
                reject("error occured");
            }
        }, 1000)
    })
}

// fetchUser(1).then(console.log).catch(console.error);

function someAnotherFun() {
    console.log("other function")
}
async function getUser() {
    try {
        let user = await fetchUser(3);
        // console.log(user);
        return user;
        //if not return then=> resolve();
        // if return user =>resolve(user);
    }
    catch (error) {
        // console.log(error);
        throw error;
         //if not throw then=> reject();
        // if throw user =>reject(error);
    }

    finally{
        console.log("finaly called");
    }
}
getUser().then((user)=>{console.log("function execution done",user)}).catch((error)=>console.error(error))
someAnotherFun();

//if we have function of async then then it return promise
//and when async function returns an value then it is resolve(vlaue);
// if  async function throws an error then it is reject(error);

//async function have await this means up to not fun function after await wait here pause async function execution