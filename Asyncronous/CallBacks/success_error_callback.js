function fetchUserProfile(id,success,error){
    if(id){
       success({name:"ganesh"});
    }
    else{
        error("something went wrong");
    }
}

function successCallback(data){
    console.log(data);
}
function errorCallback(error){
    console.log(error);
}

fetchUserProfile(1,successCallback,errorCallback);
fetchUserProfile(null,successCallback,errorCallback);
fetchUserProfile(1,(data)=>{console.log(data)},(error)=>{console.log(error)});