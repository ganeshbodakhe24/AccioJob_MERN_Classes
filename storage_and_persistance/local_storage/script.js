window.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");
    let FORM_DATA = "user-info";
    form.addEventListener("input", function(e){
        let formdata = new FormData(this);
        let name = formdata.get("name");
        let sername = formdata.get("sername");
        localStorage.setItem(FORM_DATA, JSON.stringify({ name, sername }));
    })

    function setFormData(form) {
        let data = localStorage.getItem(FORM_DATA);
        if (data) {
            data = JSON.parse(data);
            form.elements["name"].value = data["name"];
            form.elements["sername"].value = data["sername"];
        }
    }
    //when we have in more than one tag and want to update values if there is change in first tab value 
    window.addEventListener("storage", (event) => {
        if(event.key==FORM_DATA){
           data = JSON.parse(event.newValue);
            form.elements["name"].value = data["name"];
            form.elements["sername"].value = data["sername"];
        }
        
    })

    setFormData(form);


})