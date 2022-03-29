const navTogger = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navTogger.addEventListener("click", () =>{
	navMenu.classList.toggle("nav-menu_visible")
});