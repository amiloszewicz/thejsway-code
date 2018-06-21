// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter14.md#handling-classes

const linkInfo = () => {
    const li = document.getElementsByTagName('li');
    const liArr = Array.from(li);
    const liArrLength = liArr.length;
    
    console.log(liArrLength);
    console.log(li[0].childNodes[1]);
    console.log(li[liArrLength - 1].childNodes[1]);
};

linkInfo();

// Show if an element has a class
const has = (id, someClass) => {
    if (document.getElementById(`${id}`) === null) {
        console.error(`No element has id ${someClass}`);
    } else if (document.getElementById(`${id}`).classList.contains(`${someClass}`)) {
        console.log(true);
    } else {
        console.log(false);
    }
  };
  
  has("saxophone", "woodwind");     // Should show true
  has("saxophone", "brass");        // Should show false
  has("trumpet", "brass");          // Should show true
  has("contrabass", "chordophone"); // Should show an error message
