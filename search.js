/* const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'Samsung Galazy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo youga', price: 55000},
    {name: 'asus 14', price: 35000},
    {name: 'smart watch samsung', price: 7000},
    {name: 'apple watch', price: 20000},
    {name: 'plus one phone', price: 27000}
];
function searchProducts(products, searchText){
    for(const product of products){
        if(product.name.includes('watch')){
            console.log(product.name);
        }
    }
}
searchProducts(products); */





/* const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'Samsung Galazy 14', price: 60000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo youga', price: 55000 },
    { name: 'asus 14', price: 35000 },
    { name: 'smart watch samsung', price: 7000 },
    { name: 'apple watch', price: 20000 },
    { name: 'plus one phone', price: 27000 }
];
function searchProducts(products, searchText) {
    for (const product of products) {
        if (product.name.includes(searchText)) {
            console.log(product.name);
        }
    }
}
searchProducts(products, 'watch'); */





const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'Samsung Galazy 14', price: 60000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo youga', price: 55000 },
    { name: 'asus 14', price: 35000 },
    { name: 'smart watch samsung', price: 7000 },
    { name: 'apple watch', price: 20000 },
    { name: 'plus one phone', price: 27000 }
];
function searchProducts(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;
}
const matched = searchProducts(products, 'phone');
console.log(matched);