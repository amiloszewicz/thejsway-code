// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter03.md#following-second

const showProgramInstruction = () => {
    alert('Following second program will show the time 1 second after your inputs. Have fun! :)');
};

const enterHours = () => {
    return prompt('Enter hours:');
};

const enterMinutes = () => {
    return prompt('Enter minutes:');
};

const enterSeconds = () => {
    return prompt('Enter seconds:');
};

const checkCorrectHoursValue = (hours) => {
    while (typeof hours !== 'number') {
        if (isNaN(hours)) {
            hours = prompt('Please write hours with numbers, not words. Arigato ^^');
        } else {
            hours = Number(hours);
            if (hours < 0 || hours > 23) {
                hours = prompt('Enter hours between 1-23 you silly ;P');
            }
        }
    }
    return hours;
};

const checkCorrectMinutesValue = (minutes) => {
    while (typeof minutes !== 'number'){
        if (isNaN(minutes)) {
            minutes = prompt('Numbers! YOU USE NUMBERs. like: 1, 14 sometimes 69 ^^');
        } else {
            minutes = Number(minutes);
            if (minutes < 0) {
                minutes = prompt('Are we backing in time?! :O If not...try more than 0 ;) (trust me)');
            } else if (minutes > 59) {
                minutes = prompt('Do you know some min higher than 59?! How?! Teach me!... or try again c;');
            }
        }
    }
    return minutes;
};

const checkCorrectSecondsValue = (seconds) => {
    while (typeof seconds !== 'number') {
        if (isNaN(seconds)) {
            seconds = prompt('Seconds value should be write with these characters: \n"0, 1, 2, 3, 4, 5, 6, 7, 8, 9"');
        } else {
            seconds = Number(seconds);
            if (seconds < 0) {
                seconds = prompt('Seconds are fast, but not negative, try 1 +');
            } else if (seconds > 59) {
                seconds = prompt('Hold on. Too much, try a ittle bit less, like 59 max, ok??');
            }
        }
    }
    return seconds;
};

const setTimeOneSecondLater = (hoursVal, minutesVal, secondsVal) => {
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (hoursVal === 23 && minutesVal === 59 && secondsVal === 59) {
        time.hours = 0;
        time.minutes = 0;
        time.seconds = 0;
    } else if (minutesVal === 59 && secondsVal === 59) {
        time.hours = hoursVal + 1;
        time.minutes = 0;
        time.seconds = 0;
    } else if (secondsVal === 59) {
        time.hours = hoursVal;
        time.minutes = minutesVal + 1;
        time.seconds = 0;
    } else {
        time.hours = hoursVal;
        time.minutes = minutesVal;
        time.seconds = secondsVal + 1;
    }
    return time;
};

const showTimeOneSecondLater = (time) => {
    alert(`${time.hours}h ${time.minutes}m ${time.seconds}s`);
};

showProgramInstruction();
showTimeOneSecondLater(
    setTimeOneSecondLater(
        checkCorrectHoursValue(enterHours()), checkCorrectMinutesValue(enterMinutes()), checkCorrectSecondsValue(enterSeconds())
    )
);
