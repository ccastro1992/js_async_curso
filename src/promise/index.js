const myPromise = new Promise((resolve, reject) => {
    resolve('hey');
});


// Promise 2
const cows = 9;

const countCows = new Promise((resolve, reject) =>{
    if (cows > 10){
        resolve('Correcto');
    } else {
        reject('No existen');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('END')
})