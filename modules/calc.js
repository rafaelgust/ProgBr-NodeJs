let calc = require("./objCalc");

let args = process.argv.slice(2);
let a = Number(args[1]);
let b = Number(args[2]);
let result;

if(args[0] === 's'){
    result = calc.soma(a,b);
}else if(args[0] === 'm'){
    result = calc.mult(a,b);
}else{
    return console.log('adicione um modo de operação!!!');
}
console.log(result);