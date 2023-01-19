document.querySelector('.menu-gamburger').addEventListener('click', () => {
	document.querySelector('.menu').classList.toggle('menu-side--active');
	document.querySelector('.menu-gamburger').classList.toggle('menu-gamburger--active');
});
