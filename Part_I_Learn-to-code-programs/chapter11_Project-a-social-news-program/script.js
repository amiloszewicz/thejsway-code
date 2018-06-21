// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter11.md#objective

let linksArray = [];

const showMenu = () => {
    return prompt(`Choose an option:\n1 : Show links\n2 : Add a link\n3 : Remove a link\n0 : Quit`);
};

const menuOptions = (option) => {
    switch(option) {
        case '0':
            return;
        case '1':
            showLinks();
            menuOptions(showMenu());
            break;
        case '2':
            storeLinks(addLink());
            menuOptions(showMenu());
            break;
        case '3':
            removeLink();
            menuOptions(showMenu());
            break;
        default:
            menuOptions(showMenu());
    }
};

const showLinks = () => {
    if (linksArray == 0) {
        alert(`Zero links`);
    } else {
        const linksList = linksArray.map(link => (`${linksArray.indexOf(link) + 1} : ${link.title} (${link.url}). Author: ${link.author}`)).join('\n');
        alert(linksList);
    }
};

const addLink = () => {
    class link {
        constructor(title, url, author) {
            this.title = title;
            this.url = url;
            this.author = author;
        }
    }

    const newLink = new link;

    newLink.title = prompt('Enter links title');
    newLink.url = prompt('Enter links url');
    if (newLink.url.indexOf('http://') || newLink.url.indexOf('https://')) {
        newLink.url = 'http://' + newLink.url;
    }
    newLink.author = prompt('Enter links author');

    return newLink;
};

const removeLink = () => {
    const lastLinkPosition = linksArray.length;

    if (linksArray == 0) {
         alert(`Zero links to be removed`);
    } else {
        let indexLinkToRemove = prompt(`Enter the index of the link to be removed (between 1 and ${lastLinkPosition})`);

        while (typeof indexLinkToRemove !== 'number') {
            if (isNaN(indexLinkToRemove)) {
                indexLinkToRemove = prompt(`Enter the index of the link to be removed (between 1 and ${lastLinkPosition})`);
            } else {
                indexLinkToRemove = Number(indexLinkToRemove);
                if (indexLinkToRemove > lastLinkPosition || indexLinkToRemove < 1) {
                    indexLinkToRemove = prompt(`Enter the index of the link to be removed (between 1 and ${lastLinkPosition})`);
                }
            }
        }
        linksArray.splice( linksArray[indexLinkToRemove - 1], 1 );
    }
};

const storeLinks = (link) => {
    linksArray.push(link);
};

menuOptions(showMenu());
