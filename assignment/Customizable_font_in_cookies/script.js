let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let fontsize = formData.get("fontsize");
    let fontcolor = formData.get("fontcolor");

    document.cookie = `fontsize=${fontsize}`;
    document.cookie = `fontcolor=${fontcolor}`;
});

if (document.cookie) {
    let data = document.cookie.split("; ");
    let fontsize = null;
    let fontcolor = null;

    for (let i = 0; i < data.length; i++) {
        let [key, value] = data[i].split("=");
        if (key == "fontsize") fontsize = value;
        if (key == "fontcolor") fontcolor = value;
    }

    document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
    document.documentElement.style.setProperty("--fontcolor", `${fontcolor}`);
}
