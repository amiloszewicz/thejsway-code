// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter15.md#newspaper-list

// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

const showNewspaper = newspapers => {
    const content = document.getElementById('content');
    const newLine = document.createElement('br');

    newspapers.map(element => {
        const newsPaper = document.createElement('a');
        const newLine = document.createElement('br');

        newsPaper.textContent = element;
        newsPaper.setAttribute('href', element);
        content.appendChild(newsPaper);
        newsPaper.appendChild(newLine);
    })
};

showNewspaper(newspapers);
