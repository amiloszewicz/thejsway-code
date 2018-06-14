// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter03.md#following-second

const digitCharacter = new RegExp(/\d/, 'gm');

const showProgramInstruction = () => {
    alert('Following second program will show the time 1 second after your inputs. Have fun! :)');
};

const checkCorrectHoursValue = () => {
    while (hours < 0 || hours > 24 || (!digitCharacter.test(hours))) {
        if (hours < 0 || hours > 24) {
            hours = Number(prompt('Enter hours between 1-24 you silly ;P'));
        } else if (!digitCharacter.test(hours)) {
            hours = Number(prompt('Please write hours with numbers, not words. Arigato ^^'));
        } 
    }  
};

const checkCorrectMinutesValue = () => {
    while (minutes < 0 || minutes > 59 || (!digitCharacter.test(minutes))) {
        if (minutes < 0) {
            minutes = Number(prompt('Are we backing in time?! :O If not...try more than 0 ;) (trust me)'));
        } else if (minutes > 59) {
            minutes = Number(prompt('Do you know some minutes higher than 59?! How?! Teach me!... or try again c;'));
        } else if (!digitCharacter.test(minutes)) {
            minutes = Number(prompt('Numbers! YOU USE NUMBERs. like: 1, 14 sometimes 69 ^^'));
        }
    }
};

const checkCorrectSecondsValue = () => {
    while (seconds < 0 || seconds > 59 || (!digitCharacter.test(seconds))) {
        if (seconds < 0) {
            seconds = Number(prompt('Seconds are fast, but not negative, try 1 +'));
        } else if (seconds > 59) {
            seconds = Number(prompt('Hold on. Too much, try a ittle bit less, like 59 max, ok??'));
        } else if ((!digitCharacter.test(seconds))) {
            seconds = Number(prompt('Seconds value should be write with these characters: '/0, 1, 2, 3, 4, 5, 6, 7, 8, 9/''));
        }
    }
};

const setTimeOneSecondLater = () => {
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (seconds === 59 && minutes === 59) {
        time.seconds = 0;
        time.minutes = 0;
        if (hours === 24) {
            time.hours = 0;
        } else {
            time.hours = ++hours;
        }
    } else if (seconds=== 59) {
        time.seconds = 0;
        time.minutes = ++minutes;
    } else if (minutes === 59) {
        time.minutes = 0;
        time.hours = ++hours;
    } else if (hours === 24) {
        time.hours = 0;
    } else {
        time.seconds = ++seconds;
        time.minutes = ++minutes;
        time.hours = ++hours;
    }
    
    return time;
};

const showTimeOneSecondLater = (time) => {
    alert(`${time.hours}h ${time.minutes}m ${time.seconds}s`);
};


showProgramInstruction();
let hours = Number(prompt('Enter hours:'));
checkCorrectHoursValue();
let minutes = Number(prompt('Enter minutes:'));
checkCorrectMinutesValue();
let seconds = Number(prompt('Enter seconds:'));
checkCorrectSecondsValue();
showTimeOneSecondLater(setTimeOneSecondLater());
