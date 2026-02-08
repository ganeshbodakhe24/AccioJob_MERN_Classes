document.addEventListener("DOMContentLoaded", async function () {
    let msgTimer = null;

    function processingMag(bgcolor, msg) {
        let parentDiv = document.getElementById("processingMsg");
        let msgp = document.getElementById("popupMsg");
        msgp.textContent = msg;
        msgp.style.backgroundColor = bgcolor;
        parentDiv.style.display = "block";
        if (msgTimer) {
            clearInterval(msgTimer);
            msgTimer = null;
        }
        msgTimer = setTimeout(() => {
            parentDiv.style.display = "none";
        }, 2000);

    }




    async function fetchUsers() {
        processingMag("green", "geting users");
        try {
            let result = await fetch("https://jsonplaceholder.typicode.com/users")
            return result.json();
        }
        catch (err) {
            throw err;

        }

    }



    function renderUsers(data) {
        let parentDiv = document.getElementById("users");
        parentDiv.replaceChildren();
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            div.classList = "user";
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            p1.textContent = data[i].name;
            p2.textContent = data[i].email;
            p3.textContent = data[i].username;


            p1.id = data[i].id;
            p2.id = data[i].id;
            p3.id = data[i].id;


            div.append(p1, p2, p3);
            div.id = data[i].id;

            parentDiv.appendChild(div);
        }
    }



    async function fetchBlogs(id) {
        processingMag("green", "geting blogs for user " + id);
        try {
            let result = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data= await result.json();
          return data.filter((blog)=>blog.userId==id);
        }
        catch (err) {
            throw err;
        }
    }

    function renderBlog(data) {
        console.log(data);
        let parentdiv = document.getElementById("posts");
        parentdiv.replaceChildren();
        parentdiv.replaceChildren();
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            div.classList = "post";
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            h3.textContent = data[i].title;
            h3.id = `blog_${data[i].id}`;
            p.textContent = data[i].body;
            div.append(h3, p);
            parentdiv.appendChild(div);
        }

    }
    document.getElementById("users").addEventListener("click", function (e) {
        if (!isNaN(e.target.id)) {
            fetchBlogs(e.target.id).then((result) => {
                renderBlog(result);
            })
                .catch((err) => {
                    processingMag("red", "fetch blog error " + err)
                })

        }
    })

    async function fetchComments(id) {
        // id = id.slice(-1);
        processingMag("green", "geting comments for blog " + id);

        try {
            let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            return result.json();
        }
        catch (err) {
            throw err;
        }
    }

    function renderComments(data) {
        let parentdiv = document.getElementById("comments");
        parentdiv.replaceChildren();
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            div.classList = "comment";
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            h3.textContent = data[i].email;
            p.textContent = data[i].name;
            div.append(h3, p);
            parentdiv.appendChild(div);
        }
    }
    document.getElementById("posts").addEventListener("click", function (e) {
        id = e.target.id.split("_")[1];
        if (true) {
            fetchComments(id).then((result) => {
                console.log(result)
                renderComments(result);
            })
                .catch((err) => {
                    processingMag("red", "fetch comment errro  " + err);

                })

        }
    })


    try {
        let users = await fetchUsers()
        renderUsers(users);
        let blogs = await fetchBlogs(1);
        renderBlog(blogs);
        let comments = await fetchComments("1");
        renderComments(comments);
    }
    catch (err) {
        processingMag("red", "error occured " + err);
    }



});