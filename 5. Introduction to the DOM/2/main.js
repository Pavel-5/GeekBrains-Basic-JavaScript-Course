class Product {
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
}

function countBasketPrice(prod) {
    return prod.reduce(function (acс, elem) {
        return acс + elem.price * elem.count;
    }, 0); // сумма цен товаров.
}

function printBasket(prod) {
    let cart = document.querySelector('.cart');
    if(prod.length == 0) {
        cart.textContent = 'Корзина пуста.';
    }
    else {
        cart.textContent = 'В корзине ' + prod.length + ' товаров на сумму ' + countBasketPrice(prod) + ' рублей.';
    }
}

let a = new Product('Велосипед', 1, 100);
let b = new Product('Самокат', 2, 30);
let c = new Product('Ролики', 1, 50);
let d = new Product('Скейтборд', 3, 15);

let products = [a, b, c, d];

printBasket(products);