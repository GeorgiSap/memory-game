function startGame() {
  matchedPairs = 0;
  countOfMoves = 0;
  openedCard = null;
  shuffle(cards);
  clearDeck(deck);
  createDeck(cards);
}

/**
* @description Decides which action has to be taken based on which element in the deck list has been clicked
  @param {Event} The click event triggered on the deck list
  */

  function clickOnCard(event) {
    let clickedCard = event.target;
    if (clickedOnClosedCard(clickedCard)) {

      updateMovesCounter();

      if (isThereAnOpenedCard()) {
        if (isThereAMatch(clickedCard)) {
          openMatchingCards(clickedCard);
        } else {
          openNonMatchingCards(clickedCard);
          setTimeout(function(){
            closeNonMatchingCards(clickedCard);
          }, 500);
        }
      } else {
        openCard(clickedCard);
      }
    }
  }

  function clickedOnClosedCard(clickedCard) {
    if (clickedCard.nodeName === "LI") {
      if (!clickedCard.classList.contains("match")) {
        if (!clickedCard.classList.contains("open")) {
          return true;
        }
      }
    }
    return false;
  }