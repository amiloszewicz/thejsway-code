// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter17.md#character-list

const houseElement = document.getElementById('house');

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const showHouses = () => {
  houses.map(house => {
    const option = document.createElement('option');

    option.value = house.code;
    option.textContent = house.name;

    houseElement.appendChild(option);
  });
};

const showCharacters = () => {
  const characters = document.getElementById('characters');

  houseElement.addEventListener('change', e => {
    const charactersList = getCharacters(e.target.value);

    while (characters.children.length > 0) {
      characters.removeChild(characters.lastChild);
    };

    charactersList.map(character => {
      const heroName = document.createElement('li');

      heroName.textContent = character;
      characters.appendChild(heroName);
    })
  });
};

window.onload = showHouses();
showCharacters();
