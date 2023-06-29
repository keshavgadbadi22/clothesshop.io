let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toogle('fa-menu');
	navbar.classList.toogle('open');
}