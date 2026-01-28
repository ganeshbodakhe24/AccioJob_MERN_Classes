window.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");
    let FORM_DATA = "user-info";
    form.addEventListener("input", function(e){
        let formdata = new FormData(this);
        let name = formdata.get("name");
        let sername = formdata.get("sername");
        sessionStorage.setItem(FORM_DATA, JSON.stringify({ name, sername }));
    })

    function setFormData(form) {
        let data = sessionStorage.getItem(FORM_DATA);
        if (data) {
            data = JSON.parse(data);
            form.elements["name"].value = data["name"];
            form.elements["sername"].value = data["sername"];
        }
    }
    // section storage is only for one tab and 
    // when tab close storage is also cleared

    setFormData(form);


})