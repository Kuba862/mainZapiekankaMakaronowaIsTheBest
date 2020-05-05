var points = 0;

var answerBtns = document.querySelectorAll('.answer');

var checkPointsBtn = document.querySelector('.check-points');

var showCorrectAnswersBtn = document.querySelector('.show-answers');

var points = document.querySelector('points');

var pointsSpan = document.querySelector('.points-span');

var clearBtn = document.querySelector('.clear');

var showAnswersBtn = document.querySelector('.show-answers');

function addPoints() {
	this.classList.add('selected');
	if(this.classList.contains('correct')){
		points += 1;
	}
}

function showPoints () {
	pointsSpan.innerHTML = points;
	pointsContainer.classList.add('show');
}
function clear() {
	pointsContainer.classList.remove('show');
	pointsContainer.classList.add('hide');

	points = 0;
	console.log(points);
	for(const i = 0; i < answerBtns.length; i++) {
		answerBtns[i].classList.remove('selected', 'show-correct');
	}
}
function showAnswers() {
	for(var i = 0; i < answerBtns.length; i++) {
		answerBtns[i].classList.remove('selected');
		if(answerBtns[i].classList.contains('correct')) {
			answerBtns[i].classList.add('show-correct');
		}
	}
}

for(const i = 0; i < answerBtns.length; i++) {
	answerBtns[i].addEventListener('click', addPoints);
}

checkPointsBtn.addEventListener('click', skowPoints);

clearBtn.addEventListener('click', clear);

showAnswersBtn.addEventListener('click', showAnswers);