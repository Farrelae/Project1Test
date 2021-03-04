// API KEY: o+1CxAny3jhZGhUz9jk47g==RS6EhWjfHAcr5VGt

// ------------------ Hamburger Menu -----------------------
const menuController = document.getElementById('menu-hamburger');
const main = document.querySelector('main');
// define the click handler for the hamburger icon
function handleMenuControllerClick() {
	const menu = document.querySelector('.menu');
	menu.classList.add('menu-open');
	main.style.marginLeft = '250px';
}

// add an event listener to the hamburger icon
menuController.addEventListener('click', handleMenuControllerClick);

const menuClose = document.getElementById('menu-close');

function handleMenuCloseClick() {
	const menu = document.querySelector('.menu');
	menu.classList.remove('menu-open');
	main.style.marginLeft = '0px';
}

menuClose.addEventListener('click', handleMenuCloseClick);