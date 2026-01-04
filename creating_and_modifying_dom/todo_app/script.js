


let todo_list_div = document.getElementById("todo_list");
let all_todo_btn=document.getElementById("all_todo_btn");
let yet_to_do_btn=document.getElementById("yet_to_do_btn");
let completed=document.getElementById("completed_btn");
let addTodo=document.getElementById("input_text");
let count=0;


let submit_btn=document.getElementById("submit_btn");

// let arr = [{id:0 status: false, todo: "this is random text" }, ];

let arr = [];

submit_btn.addEventListener("click",()=>{
  arr.push({id:count,status:false,todo:addTodo.value});
 todo_list_div.innerHTML = "";
 count++;
 showData(arr);
})

all_todo_btn.addEventListener("click",()=>{
     todo_list_div.innerHTML = "";
    showData(arr);
})
completed.addEventListener("click",()=>{
     todo_list_div.innerHTML = "";
     showData(arr.filter((item)=>item.status==true))
})

yet_to_do_btn.addEventListener("click",()=>{
     todo_list_div.innerHTML = "";
     showData(arr.filter((item)=>item.status==false))
})


function showData(list){
    list.map((item,index) => {
    let div = document.createElement("div");
    div.className = "todo";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if(item.status==true){
         checkbox.checked=true;
    }

    let p = document.createElement("p");
    p.textContent = item.todo;
    let remove_todo_btn = document.createElement("button");
    remove_todo_btn.textContent = "remove";
    remove_todo_btn.id = "remove_todo_btn";

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(remove_todo_btn);

     remove_todo_btn.addEventListener("click",()=>{
        list.splice(index,1);
        div.remove();

    })
    checkbox.addEventListener("click",()=>{
        list[index].status=checkbox.checked;
    })

    todo_list_div.appendChild(div)
})
}

showData(arr);