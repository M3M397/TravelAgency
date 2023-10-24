const moreBtn = document.querySelector("#more-icon")
const nav = document.querySelector(".res-navbar");
moreBtn.addEventListener("click",() => {
	nav.classList.toggle("res-navbar-open");
})