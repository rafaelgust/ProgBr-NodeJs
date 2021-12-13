let args = process.argv.slice(2);
console.log(args);


let a = args[0];
let b = args[1];

const soma = (x,y) => x + y;

let result = soma(a,b);

console.log(result);