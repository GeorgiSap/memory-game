function restart() {
  timerInstance.stop();
  restartGame();
}

function playAgain() {
  closeModal();
  restartGame();
}

function restartGame() {
  resetScorePanel();
  startGame();
}

function resetScorePanel() {
  let listElements = stars.children;
  for (listElement of listElements) {
    listElement.firstChild.style.color = ENABLED_STAR_COLOR;
  }
  timer.textContent = "00:00:00";
  moves.textContent = "0 Moves";
}

function completeGame() {
  timerInstance.stop();
  setTimeout(function(){
    openModal();
  }, 500);
}

function openModal() {
  movesText.textContent = "You have completed the game with " + countOfMoves + " moves!";
  timeText.textContent = "Your time is " + timer.textContent + "!";
  cloneStars();
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function cloneStars() {
  let modalStars = document.querySelector(".modal-stars");
  modalStars.innerHTML = "";
  const modalStarsList = stars.cloneNode(true);
  modalStarsList.classList.add("modal-stars-list");
  modalStars.appendChild(modalStarsList);
}




