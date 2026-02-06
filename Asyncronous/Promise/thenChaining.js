//we can not apply then to normal function 
//if function returns promise then only we can apply then 

// function add(a,b){
//     return a+b;
// }
// add(3,4).then((result)=>{
//     console.log(result);
// });

// throw rerror ->TypeError: add(...).then is not a function

function add(a,b){
    return  Promise.resolve(a+b);

}
add(3,4).then((result)=>{
    console.log(result);
    return "xyz"//normal return (not a promise return)
})
.then((result)=>{
    console.log(result);
    return 3
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

//if first function is returning promise then  we can apply then() and also then() chaining is possible //  