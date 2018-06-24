// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter15.md#information-about-an-element

const infoAboutElements = () => {
    const title = document.createElement('h1');
    const list = document.createElement('ul');
    const contentElem = document.getElementById('content');
    const contentStyle = getComputedStyle(contentElem);

    const contentElemStyleInfo = [
        {
            style: contentStyle.height
        },
        {
            style: contentStyle.width
        }
    ];

    title.textContent = 'Information about the element';
    document.body.appendChild(title);
    document.body.appendChild(list);

    contentElemStyleInfo.map(info => {
        const styleInfoLi = document.createElement(`li`);

        styleInfoLi.textContent = info.style;
        list.appendChild(styleInfoLi);
    });
};

infoAboutElements();
