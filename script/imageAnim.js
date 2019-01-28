(() => {
	// Seclet the elements that you want to work with
	let theButton = document.querySelector('#buttonHolder img');
	// window.addEventListener("load", changeHeaderText);

	function changeHeaderText() {
		document.querySelector("h1").textContent = "Hello Lucas"
		document.querySelector("p").textContent = "lets play a game my dude"

	}
	//  Event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);
	// set up the puzzle pieces and boards

	
})();
