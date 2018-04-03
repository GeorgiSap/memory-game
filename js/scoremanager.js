const ENABLED_STAR_COLOR = "gold";
const DISABLED_STAR_COLOR = "#E8E8E8";

const COUNT_OF_MOVES_TO_DISABLE_THIRD_STAR = 25;
const COUNT_OF_MOVES_TO_DISABLE_SECOND_STAR = 35;

let timerInstance = new Timer();

/**
* @description Updates count of moves, starts timer if necessary and calls method that updates star rating
*/

function updateMovesCounter() {
	countOfMoves ++;
	updateStarRating();

	let countOfMovesText;
	if (countOfMoves === 1) {
		timerInstance.start();
		countOfMovesText = "Move";
	} else {
		countOfMovesText = "Moves";
	}

	moves.textContent = countOfMoves + " " + countOfMovesText;
}

function updateTimer() {
	timer.textContent = timerInstance.getTimeValues().toString();
}

/**
* @description Updates star rating based on count of moves
*/

function updateStarRating() {
	switch(countOfMoves) {
		case COUNT_OF_MOVES_TO_DISABLE_THIRD_STAR:
		thirdStar.style.color = DISABLED_STAR_COLOR;
		break;
		case COUNT_OF_MOVES_TO_DISABLE_SECOND_STAR:
		secondStar.style.color = DISABLED_STAR_COLOR;
		break;
	}
}