class Product {
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
}

let i18n = {
    name: 'Наименование товара',
    count: 'Количество',
    price: 'Цена'
}

function printCatalog(prod) {
    let catalog = document.querySelector('.catalog');
    for(let elem of prod) {
        let div = document.createElement('div');
        for(let d in i18n) {
            if(d != 'count') {
                let p = document.createElement('p');
                p.textContent = i18n[d] + ': ' + elem[d];
                div.appendChild(p);
            }
        }
        div.appendChild(document.createElement('hr'));
        catalog.appendChild(div);
    }
}

let a = new Product('Велосипед', 1, 100);
let b = new Product('Самокат', 2, 30);
let c = new Product('Ролики', 1, 50);
let d = new Product('Скейтборд', 3, 15);

let products = [a, b, c, d];

printCatalog(products);