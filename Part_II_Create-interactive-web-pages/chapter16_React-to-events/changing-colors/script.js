// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter16.md#changing-colors

const changeBackgroundColor = color => {
    const text = Array.from(document.getElementsByTagName(`div`));

    text.map(div => {
        div.style.backgroundColor = color;
    });
};

const pickBackgroundColor = key => {
    const pressKey = String.fromCharCode(key.charCode);
    let color = 'white';
    
    switch (pressKey) {
        case `r`:
            color = `red`;
            break;
        case `y`:
            color = `yellow`;
            break;
        case `g`:
            color = `green`;
            break;
        case `b`:
            color = `blue`;
            break;
        default:
        return `pink`;
    }
    changeBackgroundColor(color);
};

document.addEventListener(`keypress`, pickBackgroundColor);
