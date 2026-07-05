let dice;
let times = 0;

do {
    dice = Math.floor(Math.random() * 6) + 1;
    times++;
    console.log(`Try ${times}: Dice: ${dice}`);
}while (dice !== 6);
console.log(`It took ${times} rolls to get a 6.`);
