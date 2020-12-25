const burger = document.querySelector(".burger"); 
const links = document.querySelector("header ul"); 
const navLinks = document.querySelectorAll("header ul li"); 
console.log(navLinks)

burger.addEventListener("click", () => {
    links.classList.toggle("nav-active"); 
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ""; 
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle("clicked"); 
}); 