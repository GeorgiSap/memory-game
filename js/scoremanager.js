const ENABLED_STAR_COLOR = "gold";
const DISABLED_STAR_COLOR = "#E8E8E8";

const COUNT_OF_MOVES_TO_DISABLE_THIRD_STAR = 25;
const COUNT_OF_MOVES_TO_DISABLE_SECOND_STAR = 35;
const COUNT_OF_MOVES_TO_DISABLE_FIRST_STAR = 45;

function updateMovesCounter() {
	countOfMoves ++;
	updateStarRating();

	let countOfMovesText;
	if (countOfMoves === 1) {
		startTimer();
		countOfMovesText = "Move";
	} else {
		countOfMovesText = "Moves";
	}

	moves.textContent = countOfMoves + " " + countOfMovesText;
}

function startTimer() {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	timerInterval = setInterval(function() {
		if (seconds < 60) {
			seconds++;
		} else {
			seconds = 0;
			if (minutes < 60) {
				minutes++;
			} else {
				minutes = 0;
				hours++;
			}
		}
		timer.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
	}, 1000);
}

function updateStarRating() {
	switch(countOfMoves) {
		case COUNT_OF_MOVES_TO_DISABLE_THIRD_STAR:
		thirdStar.style.color = DISABLED_STAR_COLOR;
		break;
		case COUNT_OF_MOVES_TO_DISABLE_SECOND_STAR:
		secondStar.style.color = DISABLED_STAR_COLOR;
		break;
		case COUNT_OF_MOVES_TO_DISABLE_FIRST_STAR:
		firstStar.style.color = DISABLED_STAR_COLOR;
		break;
	}
}

function pad(item) {
	return (item.toString().length === 1) ? "0" + item : item;
}