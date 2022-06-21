document.onreadystatechange = function(e) {
	if (document.readyState === 'interactive') {
		var modal = document.querySelector('.modal-container');
		console.log(modal)
		var buttonOpen = document.querySelector('.button2');
		var buttonClose = document.querySelector('.modal .hrest img');
		console.log(buttonOpen)
		buttonOpen.addEventListener('click', function() {
			modal.style.display = 'flex';
		})
		buttonClose.addEventListener('click', function() {
			modal.style.display = 'none';
		})
	}
}