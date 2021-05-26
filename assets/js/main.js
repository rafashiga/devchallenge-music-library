const menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	const body = document.querySelector('body');
	if (body.className === 'hide-sidebar') {
		body.classList.add('show-sidebar');
		body.classList.remove('hide-sidebar');
	} else {
		body.classList.remove('show-sidebar');
		body.classList.add('hide-sidebar');
	}
});
