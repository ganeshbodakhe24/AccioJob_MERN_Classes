function first(){
    console.log("a");
}

function second(){
    console.log("b");
}

function third(){
   setTimeout(()=>{
     console.log("c");
   },0)
}

function fifth(){
   setTimeout(()=>{
     console.log("e");
   },0)
}


function fourth(){
    Promise.resolve().then(()=>{
        console.log("d");
    })
}
third();//go into task queue in web api//macro task queue
fifth();
fourth()//microtask queue;
first();//stack 
second();//stack


function infinint(){
    console.log("infinite calls");
    Promise.resolve().then(infinint);
}
function hii(){
    setTimeout(()=>{
        console.log("hii called");

    },0);
}

hii();
infinint();
// starvation