const fnAsync = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => resolve('Async'), 2000)
            : reject('Error')
    });
}

const myFn = async function callAsync(){
    await fnAsync().then(response => {
        console.log(response);
    })
    console.log('Hello');
}

console.log('Before');
myFn();
console.log('After');