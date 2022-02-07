const messages = ['mess1', 'mess2', 'mess3'];

function writeCards(names, occasion) {
    for (let i = 0; i < messages.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
        }
    return messages;
}

function countDown() {
    let down = 10;
    while (down > -1) {
        console.log(down--);
    }
}

