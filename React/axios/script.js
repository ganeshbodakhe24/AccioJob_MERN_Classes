let instance=axios.create({baseURL:"https://jsonplaceholder.typicode.com"});
instance.get("/posts/1/comments").then((data)=>{
    console.log(data);
}).catch((error)=>{console.log(error)})


axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((data)=>{console.log(data)})