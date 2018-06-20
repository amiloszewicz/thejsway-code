// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter14.md#handling-attributes

const linkInfo = () => {
    console.log(Array.from(document.getElementsByTagName('a')).length);
    console.log(document.querySelector('a'));
    const elements = () => {
        return Array.from(document.getElementsByTagName('a'));
    };

    const lastElem = elements => {
        const lastIndex = elements.length - 1;
        return elements[lastIndex];
    };
    console.log(lastElem(elements()));
};

linkInfo();
