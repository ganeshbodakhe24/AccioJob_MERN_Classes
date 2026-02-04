// function foodOrdered(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//          resolve("food ordered");
//        }, (2000));
//     });
// }

// function foodPrepared(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//          resolve("food prepared");
//        }, (2000));
//     })
// }

// function foodDelivared(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//          resolve("food delivared");
//        }, (2000));
//     })
// }

// foodOrdered().then((result)=>{
//     console.log(result);
//     return foodPrepared();
// })
// .then((result)=>{
//     console.log(result);
//     return foodDelivared();
// }).
// then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


function foodOrdered(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         resolve("food ordered");
       }, (2000));
    });
}

function foodPrepared(msg){
    console.log(msg);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
         resolve("food prepared");
       }, (2000));
    })
}

function foodDelivared(msg){
     console.log(msg);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
         resolve("food delivared");
       }, (2000));
    })
}

foodOrdered().then(result => foodPrepared(result))
             .then(result => foodDelivared(result))
             .then(result=>console.log(result))
             .catch(error=>console.log(error));
             