const burger = document.querySelector(".burger"); 
const links = document.querySelector("header ul"); 

burger.addEventListener("click", () => {
    links.classList.toggle("nav-active"); 
}); 