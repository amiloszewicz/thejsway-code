// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter05.md#improved-hello

// Say hello to the user
let firstName = prompt('First name');
let lastName = prompt('Last name');

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
  sayHello(firstName, lastName);
