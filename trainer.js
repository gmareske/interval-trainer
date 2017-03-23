const intervals = {
    m2: 1,
    M2: 2,
    m3: 3,
    M3: 4,
    P4: 5,
    Tritone: 6,
    P5: 7,
    m6: 8,
    M6: 9,
    m7: 10,
    M7: 11,
    P8: 0,
}
const scale = [
    'C',
    'C\u266f/D\u266d',
    'D',
    'D\u266f/E\u266d',
    'E',
    'F',
    'F\u266f/G\u266d',
    'G',
    'G\u266f/A\u266d',
    'A',
    'A\u266f/B\u266d',
    'B',
    ]

CURRENT_NOTE = 0;
TOTAL_CLICKS = 0;

const getIntervalName = function(steps) {
    for(var i in intervals) {
	if(intervals[i] == steps) return i;
    }
}

const newInterval = function() {
    return Math.floor(Math.random() * 12);
}

const updateNote = function(interval) {
    let key = document.getElementById(CURRENT_NOTE.toString());
    key.classList.remove("active");
    CURRENT_NOTE += interval;
    if (CURRENT_NOTE < 0) {
	CURRENT_NOTE += 12;
    } else if (CURRENT_NOTE > 11) {
	CURRENT_NOTE -= 12;
    }
    let elem = document.getElementById("currentNote");
    elem.innerText = "Current Note: " + scale[CURRENT_NOTE];
    key = document.getElementById(CURRENT_NOTE.toString());
    key.classList.add("active");
    
}

const updateTimes = function() {
    let elem = document.getElementById("numTimes");
    elem.innerText = "You've guessed " + TOTAL_CLICKS + " intervals.";
}

const updateInterval = function() {
    let interval = newInterval();
    let intervalName = getIntervalName(interval);
    let direction = Math.random() > .5 ? 1 : -1;
    let directionChar = direction > 0 ? '\u2191' : '\u2193';
    interval *= direction;
    updateNote(interval);
    let elem = document.getElementById("interval");
    elem.innerText = directionChar + ' ' + intervalName;
    document.getElementById("answer").style.display = 'none';
    TOTAL_CLICKS += 1;
    updateTimes();
}

const toggleNoteVisible = function() {
    let elem = document.getElementById("answer");
    elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
}

updateInterval();
document.getElementById("interval").addEventListener('click', updateInterval);
document.getElementById("toggleVisible").addEventListener('click', toggleNoteVisible);
