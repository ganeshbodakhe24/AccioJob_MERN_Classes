let hii=document.getElementById("hii");
let hello=document.getElementById("hello");


hii.addEventListener("dragstart",(e)=>{
    console.log(e.target.id);
    e.dataTransfer.setData("text/plain",e.target.id);
})


hello.addEventListener("dragstart",(e)=>{
    console.log(e);
    e.dataTransfer.setData("text/plain",e.target.id);
})

let target1=document.getElementById("target1");
let target2=document.getElementById("target2");
target1.addEventListener("dragover", (e) => {
    e.preventDefault();
});

target2.addEventListener("dragover", (e) => {
    e.preventDefault();
});

target1.addEventListener("drop",(e)=>{
    e.preventDefault();
    let id=e.dataTransfer.getData("text/plain");
   let element= document.getElementById(id);
   target1.append(element);
})
target2.addEventListener("drop",(e)=>{
    e.preventDefault();
    let id=e.dataTransfer.getData("text/plain");
   let element= document.getElementById(id);
   target2.append(element);
})

let file =document.getElementById("file");
file.addEventListener("dragover",(e)=>{
    e.preventDefault();
    file.style.border="dotted";
})
file.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    file.style.border="none";
})
file.addEventListener("drop",(e)=>{
    e.preventDefault();
    file.style.border="none";
    file.files=e.dataTransfer.files;

})