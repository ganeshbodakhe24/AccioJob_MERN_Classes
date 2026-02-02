function foodOrdered(callback){
    console.log("food ordered");
    setTimeout(() => {
            console.log("food prepared");
            setTimeout(() => {
                console.log("food packed");
                callback();
            }, (3000));
    }, 3000);
}
function foodDelivered(){
    console.log("food delivered");

}
// foodOrdered(foodDelivered);
// console.log("other task");


//callback error pattern

function fetchUser(user,callback){
    if(!user){
        callback("error user not present",null);
    }
    else{
        callback(null,{user:"ganesh",id:"1"});
    }
}


function afterUserFetch(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log(info);
    }
}

// fetchUser(1,afterUserFetch);
// fetchUser(0,afterUserFetch);

// fetchUser(0,(error,info)=>{
//      if(error){
//         console.log(error);
//     }
//     else{
//         console.log(info);
//     }
// });


//success and error callback
