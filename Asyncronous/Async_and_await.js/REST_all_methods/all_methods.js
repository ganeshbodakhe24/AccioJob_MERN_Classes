async function putData(){
    let newPost={
        title:"new post ",
        userId:"2",
        body:"this is body of post"
    }
    let result=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify(newPost)
    }) ;

     console.log( await result.json())
}
// putData();

async function update() {
      let newPost={
        title:"new post ",
        userId:"2",
        id:"4",
        body:"this is body of post"
    }
    let result=await fetch(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`,{
            method:"PUT",
            body:JSON.stringify(newPost)
    })
    console.log(await result.json());
}
// update();


async function deleteData(id) {
   
    let result=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:"DELETE"
    })
    console.log(await result.json());
}
deleteData(3);