import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}


const myFunc = async (urlApi) => {
    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);

        // console.log(products);
        console.log(product);
        console.log('error');
    } catch (error) {
        console.error(error);
    }
}

myFunc(API);