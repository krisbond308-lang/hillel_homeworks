function pow (x, y) {
let result= 1
for(let i= 1; i<=y; i++) {
    result *= x;
}
return result;
}
console.log (pow (1, 2))
console.log (pow (2, 2))
