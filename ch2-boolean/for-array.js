const temperatures = [72, 68, 75, 65, 69, 74, 77];
const LIMIT = 75;
let found = false;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > LIMIT) {
        found = true;
        console.log(`First temp over limit: ${temperatures[i]}`);
        break;
    }
}

if (!found) {
    console.log("No temp over limit");
}