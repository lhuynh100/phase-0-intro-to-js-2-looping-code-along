// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
} 
return messages;
}
console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'birthday'));


function countDown(i) {
    let countDown = 0;
    while (i >= 0) {
        console.log(i--);
    }
}