function first(){
    console.log("a");
}

function second(){
    console.log("b");
}

function third(){
   setTimeout(()=>{
     console.log("c");
   },100)
}

function fourth(){
    Promise.resolve().then(()=>{
        console.log("d");
    })
}
third();//go into task queue in web api//macro task queue
fourth()//microtask queue;
first();//stack 
second();//stack
