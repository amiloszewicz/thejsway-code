// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter16.md#counting-clicks

let clickCount = 0;
const myButton = document.getElementById(`myButton`);
const deactivateButton = document.getElementById(`deactivate`);

const countClickMyButton = () => {
    clickCount += 1;
    console.log(`You clicked 'click me' button ${clickCount} times`);
};

const deactivateCountClick = () => {
   myButton.removeEventListener(`click`, countClickMyButton);
};

myButton.addEventListener(`click`, countClickMyButton);
deactivateButton.addEventListener(`click`, deactivateCountClick);