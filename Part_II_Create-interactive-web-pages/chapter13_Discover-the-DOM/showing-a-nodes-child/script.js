// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter13.md#showing-a-nodes-child

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
    const children = document.body.childNodes.length - 1;
    
    if (node !== document.body) {
        console.error(`Wrond node type`);
    } else if (index > children || index < 0) {
        console.error(`Incorrect index`);
    } else {
        console.log(node.childNodes[index]);
    }
  };
  
  // Should show the h1 node
  showChild(document.body, 1);
  
  // Should show "Incorrect index"
  showChild(document.body, -1);
  
  // Should show "Incorrect index"
  showChild(document.body, 8);
  
  // Should show "Wrong node type"
  showChild(document.body.childNodes[0], 0);
