const regex = /[^Aa]{6,}/g;

console.log("Wonderful".match(regex));
console.log("Joyful".match(regex));
console.log("Happiness".match(regex));//знайде, бо довжина після а більше 6
console.log("Time".match(regex));
console.log("Task".match(regex));
console.log("Apple".match(regex));