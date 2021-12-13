let soma = require("./soma");
let mult = require("./mult");

let args = process.argv.slice(2);
let a = Number(args[1]);
let b = Number(args[2]);
let result;

if(args[0] === 's'){
    result = soma(a,b);
}else if(args[0] === 'm'){
    result = mult(a,b);
}else{
    return console.log('adicione um modo de operação!!!');
}


console.log(result);
