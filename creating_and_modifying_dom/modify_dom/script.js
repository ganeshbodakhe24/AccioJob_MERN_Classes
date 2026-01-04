const section=document.createElement("section");

const para=document.createElement("p");
para.id="title";
para.textContent="hii this is random text";
section.appendChild(para);


const link=document.createElement("a");
link.href="https://www.google.com/";
link.target="_blank"
link.textContent="this is google";
section.appendChild(link);


//appendChild  can only append one element at a time 
//in example we only append section element
// document.body.appendChild(section);

//append  can  append more than one element at a time 
// document.body.append(link,para);


const insertBeforePara=document.createElement("p");
insertBeforePara.id="title";
insertBeforePara.textContent="hii ram";
section.appendChild(insertBeforePara);

// insert before
// document.body.appendChild(section);
// section.insertBefore(insertBeforePara,link)

//prepend always add element always at the first child of targeted element
document.body.appendChild(section);
section.prepend(link); 

// delete the elements
let remove_btn=document.createElement("button");
remove_btn.textContent="remove first child";
remove_btn.id="remove_first_child";
section.append(remove_btn);

remove_btn.addEventListener("click",()=>{
    if(section.firstChild &&section.firstChild.id!=remove_btn.id){
        section.firstChild.remove();
    }
    else{
        alert("you remove all elements");
    }
})




//difference betn remove child and remove
// 1. remove child needs to be called on the parent element
//2. remove child returns the node which was removed
// alert(section.removeChild(link));

//3. remove not return anything after removed self elemnt=return undefine
// alert(link.remove())






//remove  all child nodes from an element
// 1. inner html set blank 

// 2. replaceChildren mentod wihout any argument
// section.replaceChildren();

//   const newPara=document.createElement("p");
//   newPara.textContent="this is new para";
//   section.replaceChildren(newPara)//replace all children with this node
//   section.replaceChild(newPara,link); //to replace only one child 
