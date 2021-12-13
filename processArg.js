//node processArg 50 30
let args = process.argv.slice(2);
let a = args[0];
let b = args[1];
// [ '50', '30' ]
const soma = (x,y) => x + y;
let resultConc = soma(a,b);
console.log(resultConc);
//5030
//arg vem como string e a soma termina como uma concatenação

let c = Number(args[0]);
let d = Number(args[1]);

let resultSom = soma(c,d);
console.log(resultSom);
//80