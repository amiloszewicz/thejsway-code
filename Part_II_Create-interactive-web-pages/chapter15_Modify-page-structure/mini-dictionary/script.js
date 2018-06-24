// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter15.md#mini-dictionary

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

const showWords = words => {
    const wordsList = document.createElement('dl');
    const content = document.getElementById('content');
    
    wordsList.id = 'words_list';
    content.appendChild(wordsList);

    words.map(word => {
        const term = document.createElement('dt');
        const definition = document.createElement('dd');

        term.textContent = word.term;
        term.style.fontWeight = 'bold';
        definition.textContent = word.definition;
        definition.style.fontWeight = 'normal';
        wordsList.appendChild(term);
        term.appendChild(definition);
    })
};

showWords(words);
