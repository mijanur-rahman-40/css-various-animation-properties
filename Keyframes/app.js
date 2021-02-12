let buttonPlay = document.getElementById('play');
let box = document.getElementById('box-shape');
let points = document.getElementById('points');

let angle = 45, start, turn = true, totalPoints = 1000;

buttonPlay.addEventListener('click', () => {
    if (turn) {
        updateElements([buttonPlay, box], ['orange', 'goldenrod'], ['stop', '']);
        start = setInterval(() => {
            box.style.transform = 'rotate(' + angle + 'deg)';
            angle += 45;
        }, 50);
    } else {
        clearInterval(start);
        let stoppedAT = angle - 45;
        let margin = stoppedAT % 360;

        if (margin == 0) { // winner
            updateElements([box], ['green'], ['winner']);
           totalPoints += 1000;
        } else { // loser
            updateElements([box], ['red'], ['loser']);
             totalPoints -= (360 - margin);
        }
        updateElements([buttonPlay], ['goldenrod'], ['play']);
        points.innerText = totalPoints;
    }
    turn = !turn;
});

const updateElements = (elements, bgColors, texts) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = bgColors[i];
        elements[i].innerText = texts[i];
    }
}