function firstFunc(callback){
    console.log("first fun");
    setTimeout(()=>{
        callback();
    },3000)
}
function secondFunc(callback){
    console.log("second fun");
    setTimeout(()=>{
        callback();
    },3000)
}
function thirdFunc(callback){
    console.log("third fun");
    setTimeout(()=>{
        callback();
    },3000)
}
function forthFunc(){
    console.log("forth fun");
    
}
firstFunc(()=>{
    secondFunc(()=>{
        thirdFunc(()=>{
            forthFunc();
        })
    })
});


firstFunc(secondFunc);
firstFunc(()=>{secondFunc()})