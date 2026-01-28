let parent=document.querySelector(".parent");

for(let i=0;i<2000;i++){
    let section=document.createElement("section");
    section.className="box";
   
    section.addEventListener("mouseover",()=>{
        section.style.backgroundColor=changeColor(); 
    })
     section.addEventListener("mouseout",()=>{
        setTimeout(()=>{
                    section.style.backgroundColor="#aaa"; 

        },1000)
    })
    parent.appendChild(section);
}
function changeColor(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

console.log(changeColor);