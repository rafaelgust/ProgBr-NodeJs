//multiplos export leva apenas o ultimo a ser exportado, para exportar mais de uma função é necessario criar um obj com elas
const calc = {
    soma: (x,y) => {
        return x + y;
    },
    mult: (x,y) => {
        return x * y;
    }
}

module.exports = calc;