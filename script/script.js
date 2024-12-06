const body = document.querySelector("section");
const toggle = document.querySelector(".container");

let getMode = localStorage.getItem("mode")
if(getMode && getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active")
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggle.classList.toggle("active");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
        //Redirection on the dark page
        location.href = "superHeros.html"; 
    } else {
        localStorage.setItem("mode", "light");
        //Redirection on the light page
        location.href = "index.html";
    }
    
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
