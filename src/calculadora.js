const extenso = require('extenso')

function calculaResultado(a, b){
    return extenso(a * b)
}

module.exports = { // faço isso para conseguir usar em qualquer arquivo que precise da função
    calculaResultado
}