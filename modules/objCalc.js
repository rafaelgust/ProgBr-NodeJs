//multiplos export leva apenas o ultimo a ser exportado, exportando mais de uma função com um obj nelas
const calc = {
    soma: (x,y) => {
        return x + y;
    },
    mult: (x,y) => {
        return x * y;
    }
}

module.exports = calc;