const ENABLED_STAR_COLOR = "gold";
const DISABLED_STAR_COLOR = "#E8E8E8";

const COUNT_OF_MOVES_TO_DISABLE_THIRD_STAR = 25;
const COUNT_OF_MOVES_TO_DISABLE_SECOND_STAR = 35;

let timerInstance = new Timer();

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

function pad(item) {
	return (item.toString().length === 1) ? "0" + item : item;
}