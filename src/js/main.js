const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');


let result = 0;
let currentTIme = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assing the id of the randomPosition to HitPosition
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    });
});

moveMole();

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

function countDown() {
    currentTIme--;
    timeLeft.textContent = currentTIme;

    if (currentTIme === 0) {
        clearInterval(timerId);
        alert(`GAME OVER! Your final score id: ${result}`);
    }
}

let timerId = setInterval(countDown, 1000);