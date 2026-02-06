let form = document.getElementById("input_form");
let searchform = document.getElementById("searchForm");
let Datakey = "queries"

function submitDataloader(info) {
    document.getElementById("dataSubmitLoader").textContent = info;
}



form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let name = formdata.get("name");
    let email = formdata.get("email");
    let query = formdata.get("query");
    console.log({ name, email, query })

    submitDataloader("Data Submiting...");

    submitData({ name, email, query }).then((result) => {
        submitDataloader("Data Submited");
    })
        .catch((error) => {
            submitDataloader("error : " + error);
        })
})

function submitData(data) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let queries = JSON.parse(localStorage.getItem(Datakey));
                if (!queries?.length) {
                    queries = [];
                }
                queries.push(data);
                localStorage.setItem(Datakey, JSON.stringify(queries));
                resolve();
            }, 3000);


        }
        catch (exception) {
            reject(exception);
        }
    })
}


function searchLoader(info) {
    document.getElementById("searchloader").textContent = info;
}
function fillSearchResult(data) {
    let div = document.createElement("div");
    div.classList = "data";
    let p1 = document.createElement("p");
    let p2 = document.createElement("p")
    let p3 = document.createElement("p");
    let strong1 = document.createElement("strong");
    let strong2 = document.createElement("strong");
    let strong3 = document.createElement("strong");

    strong1.textContent="Name : "+data.name;
    strong2.textContent="Email : "+data.email;
    strong3.textContent="Query : "+data.query;

    p1.appendChild(strong1);
    p2.appendChild(strong2);
    p3.appendChild(strong3);

    div.append(p1,p2,p3);
    return div;
}


searchform.addEventListener("submit", function (event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let searchemail = formdata.get("email");
    searchLoader("Searching ...");
    searchData(searchemail).then((result) => {
        let parentdiv=document.getElementById("searchReasult");
        parentdiv.replaceChildren();
        searchLoader("Search Done");
        for(let i=0;i<result.length;i++){
          let div= fillSearchResult(result[i]);
           parentdiv.append(div);
        }
    })
        .catch((error) => {
            searchLoader("error" + error);
        })
})

function searchData(email) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let data = JSON.parse(localStorage.getItem(Datakey));
                data = data.filter((person) => person.email == email);
                resolve(data);
            }, 300);
        }
        catch (exception) {
            reject(exception);
        }
    })
}