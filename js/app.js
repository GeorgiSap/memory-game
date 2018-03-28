  let cardTypes = ["fa-anchor", "fa-bolt", "fa-diamond", "fa-paper-plane-o", 
  "fa-leaf", "fa-bicycle", "fa-bomb", "fa-cube"];

  let cards;
  let deck;
  let matchedPairs;
  let countOfMoves;
  let openedCard;
  let stars;
  let firstStar;
  let secondStar;
  let thirdStar;
  let moves;
  let timer;
  let timerInterval;
  let restartButton;
  let modal;
  let playAgainButton;
  let movesText;
  let timeText;
  let closeModalButton;

  document.addEventListener("DOMContentLoaded", function(event) {
  	deck = document.querySelector(".deck");
  	moves = document.querySelector(".moves");
  	restartButton = document.querySelector(".restart-button");
  	timer = document.querySelector(".timer");
  	stars = document.querySelector(".stars");
  	firstStar = document.querySelector(".first-star");
  	secondStar = document.querySelector(".second-star");
  	thirdStar = document.querySelector(".third-star");
    modal = document.querySelector(".modal");
    playAgainButton = document.querySelector(".modal-button");
    movesText = document.querySelector(".moves-text");
    timeText = document.querySelector(".time-text");
    closeModalButton = document.querySelector(".close");
    
    deck.addEventListener("click", clickOnCard);
    restartButton.addEventListener("click", restart);
    playAgainButton.addEventListener("click", playAgain);
    closeModalButton.addEventListener("click", closeModal);

    initCards();
    startGame();
  });

  function initCards() {
  	cards = [];
  	for (cardType of cardTypes) {
  		cards.push(cardType, cardType);
  	}
  }

