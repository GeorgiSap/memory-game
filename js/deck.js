function createDeck(cards) {
	const fragment = document.createDocumentFragment();

	for (card of cards) {
		const newListElement = document.createElement("li");
		newListElement.classList.add("card");

		const newIconElement = document.createElement("i");
		newIconElement.classList.add("fa");
		newIconElement.classList.add(card);
		newListElement.appendChild(newIconElement);
		
		fragment.appendChild(newListElement);
	}

	deck.appendChild(fragment);
}

function clearDeck(deck) {
	while (deck.firstChild) {
		deck.removeChild(deck.firstChild);
	}
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
