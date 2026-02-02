let input=document.getElementById("input");
input.addEventListener("keydown",(e)=>{
    console.log(e.target.value);//not called on shotcut key
});
input.addEventListener("keypress",(e)=>{
    console.log(e.target.value);//also called on shortcut key
});