let products = [5, 10, 6, 38, 24, 9, 5, 16];

function countBasketPrice(prod) {
    return prod.reduce(function (acс, elem) {
        return acс + elem;
    }, 0); // сумма элементов массива (prod).
}

let sum = countBasketPrice(products);

console.log('products: ', products);
console.log('sum: ', sum);