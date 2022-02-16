const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'Samsung Galazy 14', price: 6000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo youga', price: 55000 },
    { name: 'asus 14', price: 35000 },
    { name: 'smart watch samsung', price: 4000 },
    { name: 'apple watch', price: 9000 },
    { name: 'plus one phone', price: 27000 }
];
/* for (const product of products) {
    if (product.price < 5000) {
        break;
    }
    console.log(product);
} */

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}


//------------------------------Quiz----------------------
function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
  const result = compare(15, "15");
//   console.log(result);



  function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
   console.log(result);


 