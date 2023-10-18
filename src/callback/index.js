function suma(a, b){
    return a + b;
};

function calc(a, b, callback){
    return callback(a, b);
};

console.log(calc(4, 5, suma));

// Timeout
setTimeout(function(){
    console.log('Hola JS');
}, 2000);

function saludo(nombre){
    console.log(`Hola ${nombre}`);
};

setTimeout(saludo, 2000, 'Cris')