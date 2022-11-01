let flasher = document.querySelector('.flasher');

function toggle() {
	flasher.classList.toggle('red');
	flasher.classList.toggle('blue');

};

setInterval(toggle, 200);