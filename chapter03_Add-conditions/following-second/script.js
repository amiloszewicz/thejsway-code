// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter03.md#following-second

alert('Following second program will show the time 1 second after your inputs.');

let hours = Number(prompt('Enter hours'));
if (hours > 24) {
    alert('There is no a hour highier than 24');
} else {
    let minutes = Number(prompt('Enter minutes'));
    if (minutes > 59) {
        alert('You can\'t enter more than 59 minutes, it doesn\'t have sense');
    } else {
        let seconds = Number(prompt('Enter seconds'));
        if (seconds > 59) {
            alert('Max value is 59...learn some more about CLOCK!!');
        }

        if (seconds === 59 && minutes === 59) {
            seconds = 0;
            minutes = 0;
            if (hours === 24) {
                hours = 0;
            } else {
                hours++;
            }
        } else if (seconds === 59) {
            seconds = 0;
            minutes++;
        } else if (minutes === 59) {
            minutes = 0;
            hours++;
        } else if (hours === 24) {
            hours = 0;
        } else {
            seconds++;
            minutes++;
            hours++;
        }
        alert(`${hours}h ${minutes}m ${seconds}s`);
    }
}
