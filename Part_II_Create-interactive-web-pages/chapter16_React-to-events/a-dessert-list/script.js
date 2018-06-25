// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter16.md#a-dessert-list

const addDessertButton = document.getElementById(`addButton`);
const dessertList = document.getElementById(`desserts`);
const dessertElement = document.createElement(`li`);
    

const addDessert = () => {
    const chooseDessert = prompt(`Add a dessert`);
    
    dessertElement.innerText = chooseDessert;
    dessertElement.id = chooseDessert;

    dessertList.appendChild(dessertElement);
};

addDessertButton.addEventListener(`click`, addDessert);

const dessertToEdit = document.getElementById(dessertElement.id);

const a = () => {
    console.log(`a`);
};

dessertToEdit.addEventListener(`click`, a);