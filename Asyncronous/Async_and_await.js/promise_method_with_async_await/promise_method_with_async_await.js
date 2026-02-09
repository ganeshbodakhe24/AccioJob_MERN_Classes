function fun1(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("fun1 result");
            reject("error in fun 1");
        }, delay)
    })
}

function fun2(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun2 result");
        }, delay)
    })
}

function fun3(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun3 result");
        }, delay)
    })
}


// promise all

async function main() {
    //promise all
    try {
        let results = await Promise.all([fun1(100), fun2(200), fun3(200)]);
        for (let result of results) {
            console.log(result);
        }
    }
    catch (err) {
        console.error(err);
    }


    //promise any

    // try {
    //     let anyresult = await Promise.any([fun1(100), fun2(299), fun3(300)]);
    //     console.log("any result :: " + anyresult);
    // }
    // catch (err) {
    //     console.log(err);
    // }


    // promise of rece

    // try {
    //     let resultOfRace = await Promise.race([fun1(1000), fun2(200), fun3(200)]);
    //    console.log( "result of race ::  "+resultOfRace);
    // }
    // catch (err) {
    //     console.error(err);
    // }



    // all settled

    // try{
    //     let allsettled=await Promise.allSettled([fun1(100),fun2(200),fun3(300)]);
    //     console.log(allsettled);
    // }
    // catch(err){
    //     console.log(err);
    // }
}



main();