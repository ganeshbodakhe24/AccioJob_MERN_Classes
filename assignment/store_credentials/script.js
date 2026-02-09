//your JS code here. If required.

let form=document.getElementById("form");
form.addEventListener("submit",function (event){
	event.preventDefault();
	let formData=new FormData(event.target);
	let username=formData.get("username");
	let password=formData.get("password");
	let checkbox=formData.get("checkbox");
    console.log(checkbox);
	if(checkbox=="on"){
        let data={username,password};

		localStorage.setItem("login",JSON.stringify(data));
	}
	else{
        if(localStorage.getItem("login")){
            		localStorage.removeItem(login);
        }
	}
	
	alert(`Logged in as ${username}`);
})

if(localStorage.getItem("login")){
	let existingUser=document.getElementById("existing");
	existingUser.style.display="block";
	
}
document.getElementById("existing").addEventListener("click",()=>{
	let login=JSON.parse(localStorage.getItem("login"));
		alert(`Logged in as ${login.username}`);
})