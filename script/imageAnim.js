(() => {
	// var always first
	// set up the Puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	// functions go in the middle
	function creatPuzzlePieces(pictureIndex) {
		// genertate puzzle pieces for the left hand side
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail" draggable>`;
		
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

		initDrag();
	}

	// drag and drop functionality does here

	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	// handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you droped sumpin on me");
      
			// let the drop happen checking if theres anything in the parent element
			let stopDrop = e.target;
				while (stopDrop !== 0 && !stopDrop.classList.contains("drop-zone")) {
				stopDrop = stopDrop.parentNode;
			}

				// Prevents stacking not alowing anything more then 1 being in the parent element
				if (stopDrop && stopDrop.childNodes.length > 0) {
					return false;
					e.preventDefault();
				}
      
			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});	

	function resetPuzzlePieces() {
		// empty the thumbnail container
		piecesBoard.innerHTML = "";
		creatPuzzlePieces(this.dataset.puzzleref)
		// identifying whats in the parent element 
		var images = document.getElementsByClassName("puzzle-image");
    			while(images.length > 4){
    	// Slecting the child Elements and removing them
        		images[4].parentNode.removeChild(images[4]);
    }
}

	// event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	creatPuzzlePieces(0);
	
})();
