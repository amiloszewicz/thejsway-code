// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter16.md#a-dessert-list

const addDessertButton = document.getElementById(`addButton`);
const dessertList = document.getElementById(`desserts`);

const addDessert = () => {
    const chooseDessert = prompt(`Add a dessert`);
    const dessertElement = document.createElement(`li`);
    
    dessertElement.innerText = chooseDessert;
    dessertElement.contentEditable = true;

    dessertList.appendChild(dessertElement);
};

addDessertButton.addEventListener(`click`, addDessert);
