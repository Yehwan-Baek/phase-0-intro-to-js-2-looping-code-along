// Code your solutions in this file
const name = ['Guadalupe','Ollie','Aki']

function writeCards(name, comment) {
    let thankYouMessage = [];
    for(let i=0 ; i < name.length; i++){
        thankYouMessage.push(`Thank you, ${name[i]}, for the wonderful ${comment} gift!`)
    }
    return thankYouMessage
}

console.log(writeCards(name, 'surprise'))

function countDown(i) {
    while(i>0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}
console.log(countDown(10))