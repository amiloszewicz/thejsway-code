// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter15.md#adding-a-paragraph

const addSentence = () => {
    const pElem = document.createElement('p');
    const aElem = document.createElement('a');

    pElem.textContent = 'Here is a more complete ';
    pElem.id = 'sentence';
    aElem.textContent = 'list';
    aElem.setAttribute('href', 'https://en.wikipedia.org/wiki/List_of_programming_languages');

    pElem.insertAdjacentElement('beforeend', aElem);
    content.appendChild(pElem);
    document.getElementById('sentence').innerHTML += ' of programming languages';
};

addSentence();
