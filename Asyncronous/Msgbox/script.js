 let btn=document.getElementById("btn");
 let timeout;
btn.addEventListener("click",()=>{
   if( timeout){
    clearTimeout(timeout);
    console.log("clear time out");
   }
        timeout=setTimeout(()=>{
            alert("this is 2 sec delay msg");
            
        },2000);
        console.log("set time out");
   
})