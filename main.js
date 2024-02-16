const open = document.querySelector('.hamburger');
const link = document.querySelector('.links');

open.addEventListener('click', () => {
	const style = link.style.display;
	if (style == 'flex') {
		link.style.display = 'none';
	} else {
		link.style.display = 'flex';
	}
});
