
let todo_list_div = document.getElementById("todo_list");
let all_todo_btn = document.getElementById("all_todo_btn");
let yet_to_do_btn = document.getElementById("yet_to_do_btn");
let completed = document.getElementById("completed_btn");
let addTodo = document.getElementById("input_text");
let count = 0;
let completed_no=0;
let total_todos_no=document.getElementById("total_todos_no");
let completed_todos_no=document.getElementById("completed_todos_no");
let yet_to_do_todos_no=document.getElementById("yet_to_do_todos_no");
let submit_btn = document.getElementById("submit_btn");

// let arr = [{id:0 status: false, todo: "this is random text" }, ];

let arr = [];

submit_btn.addEventListener("click", () => {
    count++;
    completed_count();
    MyTodo(addTodo.value);
})

all_todo_btn.addEventListener("click", () => {
  Array.from(document.getElementsByClassName("completed"))
    .forEach(item => item.style.display = "flex");

  Array.from(document.getElementsByClassName("not_completed"))
    .forEach(item => item.style.display = "flex");
});
completed.addEventListener("click", () => {
  Array.from(document.getElementsByClassName("not_completed"))
    .forEach(item => item.style.display = "none");

  Array.from(document.getElementsByClassName("completed"))
    .forEach(item => item.style.display = "flex");
});

yet_to_do_btn.addEventListener("click", () => {
  Array.from(document.getElementsByClassName("not_completed"))
    .forEach(item => item.style.display = "flex");

  Array.from(document.getElementsByClassName("completed"))
    .forEach(item => item.style.display = "none");
});


function MyTodo(value) {
    let div = document.createElement("div");
    div.className = "todo";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let p = document.createElement("p");
    p.textContent = value;
    let remove_todo_btn = document.createElement("button");
    remove_todo_btn.textContent = "remove";
    remove_todo_btn.id = "remove_todo_btn";
   
    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(remove_todo_btn);
    div.classList.add("not_completed");

    remove_todo_btn.addEventListener("click", () => {
        count--;
        div.remove();
        completed_count()
    })
    checkbox.addEventListener("click", () => {
        if(div.classList.contains("not_completed")){
             div.classList.add("completed");
             div.classList.remove("not_completed");
               completed_count();
        }
        else{
            div.classList.remove("completed")
             div.classList.add("not_completed");
            completed_count();

        }
    })

    todo_list_div.appendChild(div)


}

function completed_count(){
    let x=document.getElementsByClassName("completed");
if(x){
    completed_todos_no.innerText=x.length;
    yet_to_do_todos_no.innerText=count-x.length;
    total_todos_no.innerText=count;
}
else{
     completed_todos_no.innerText=0;
    yet_to_do_todos_no.innerText=count-0;
        total_todos_no.innerText=count;
}

}