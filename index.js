// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["Teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/
/*
function writeCards(names, eventName){
    const newArray = []
    for (let i = 0; i < names.length; i++) {
    let a = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        newArray.push(a)
    };
    return newArray
}
*/

function countDown(integer){
    while(integer >= 0) {
        console.log(integer)
        integer -=1
    }
}

function writeCards(names, event){
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        let a = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        newArray.push(a)
    }
    return newArray
}