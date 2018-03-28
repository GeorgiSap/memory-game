 const COUNT_OF_PAIRS = 8;

 function isThereAnOpenedCard() {
 	return openedCard !== null;
 }

 function isThereAMatch(clickedCard) {
 	let clickedCardClass = clickedCard.childNodes[0].classList[1];
 	let openCardClass = openedCard.childNodes[0].classList[1];
 	return clickedCardClass === openCardClass;
 }

 function openMatchingCards(card) {
 	card.classList.add("match");
 	openedCard.classList.remove("open", "show");
 	openedCard.classList.add("match");
 	openedCard = null;
 	matchedPairs ++;
 	if (matchedPairs === COUNT_OF_PAIRS) {
 		completeGame();
 	}
 }

 function openNonMatchingCards(card) {
 	deck.removeEventListener("click", clickOnCard);
 	card.classList.add("open", "show");
 }

 function closeNonMatchingCards(card) {
 	card.classList.remove("open", "show");
 	closeCard();
 	deck.addEventListener("click", clickOnCard);
 }

 function openCard(card) {
 	card.classList.add("open", "show");
 	openedCard = card;
 }

 function closeCard() {
 	openedCard.classList.remove("open", "show");
 	openedCard = null;
 }