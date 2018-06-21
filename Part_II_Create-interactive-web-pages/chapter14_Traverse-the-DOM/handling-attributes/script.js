// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter14.md#handling-attributes

const linkInfo = () => {
    const li = document.getElementsByTagName('li');
    const liArr = Array.from(li);
    const liArrLength = liArr.length;
    
    console.log(liArrLength);
    console.log(li[0].childNodes[1]);
    console.log(li[liArrLength - 1].childNodes[1]);
};

linkInfo();
