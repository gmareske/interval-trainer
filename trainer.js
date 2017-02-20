
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

CURRENT_NOTE = 0;

const getIntervalName = function(steps) {
    for(var i in intervals) {
	if(intervals[i] == steps) return i;
    }
}

const newInterval = function() {
    return Math.floor(Math.random() * 12);
}

const updateInterval = function() {
    let interval = newInterval();
    let intervalName = getIntervalName(interval);
    let direction = Math.random() > .5 ? 1 : -1;
    let directionChar = direction > 0 ? '\u2191' : '\u2193';
    interval *= direction;
    let elem = document.getElementById("interval");
    elem.innerText = directionChar + ' ' + intervalName;
}

document.getElementById("interval").addEventListener('click', updateInterval);
