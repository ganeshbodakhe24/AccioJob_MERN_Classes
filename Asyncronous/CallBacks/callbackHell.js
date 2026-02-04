function fetchUserProfile(userName,cb){
    setTimeout(()=>{
            if(!userName){
                cb("error occured in user name",null);

            }
            else{
                if(userName=="r"){
                    cb(null,{name:"raj",age:32});
                }
                else{
                     cb(null,{name:"sham",age:2});
                }
            }
    },1000);
}
function validateUser(profile,cb){
    if(profile.age<18){
        cb("error in age validation",null);
    }
    else{
        cb(profile);

    }
}


function getProfile(profile){
    console.log(profile);
}


fetchUserProfile("f",(error,profile)=>{
    if(error){
        console.log(error);
    }
    else{
        validateUser(profile,(error,profile)=>{
            if(error){
                console.log(error);
            }
            else{
                getProfile(profile);
            }
        })
    }
})