// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter11.md#objective

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
