// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter15.md#updating-colors

const changeStyle = () => {
    const text = Array.from(document.getElementsByTagName(`div`));
    const enterColor = prompt(`Enter color`);
    const enterBackgroundColor = prompt(`Enter background color`);

    text.map(elem => {
        elem.style.color = enterColor;
        elem.style.backgroundColor = enterBackgroundColor;
    });
};

changeStyle();
