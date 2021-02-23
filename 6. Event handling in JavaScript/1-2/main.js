"use strict";

class Product {
  constructor(name, price, img, count = 0) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.count = count;
  }
}

function createCatalogHTML(prod) {
  let div = document.querySelector(".catalog");
  for (let elem of prod) {
    //figure
    let figure = document.createElement("figure");
    figure.classList.add("product");

    //figure -> slider
    let slider = document.createElement("div");
    slider.classList.add("product__slider");

    //figure -> slider -> arrow--back
    let arrow = document.createElement("div");
    arrow.classList.add("slider__arrow");
    arrow.classList.add("slider__arrow--back");

    let pag = document.createElement("img");
    pag.src = "img/pagination__left.svg";

    arrow.appendChild(pag);

    slider.appendChild(arrow);
    //figure -> slider -> arrow--back end

    let img = document.createElement("img");
    img.src = elem.img;
    img.classList.add("slider__img");

    slider.appendChild(img);

    //figure -> slider -> arrow--forward
    arrow = document.createElement("div");
    arrow.classList.add("slider__arrow");
    arrow.classList.add("slider__arrow--forward");

    pag = document.createElement("img");
    pag.src = "img/pagination__right.svg";

    arrow.appendChild(pag);

    slider.appendChild(arrow);
    //figure -> slider -> arrow--forward end

    figure.appendChild(slider);
    //figure -> slider end

    //figure -> figcaption
    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("product__description");

    let h2 = document.createElement("h2");
    h2.textContent = elem.name;
    h2.classList.add("description__name");

    figcaption.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = elem.price;
    p.classList.add("description__price");

    figcaption.appendChild(p);

    let button = document.createElement("button");
    button.classList.add("description__buy");
    button.textContent = "Купить";
    button.addEventListener("click", () => {
      let temp;
      for (let i of products) {
        if (i.name == h2.textContent) {
          temp = i;
          break;
        }
      }

      let flag = true;
      for (let i of cartProducts) {
        if (temp.name == i.name) {
          temp.count++;
          document
            .getElementById(temp.name)
            .querySelector(".description__quantity").value = temp.count;
          flag = false;
        }
      }

      if (flag) {
        addProdCartHTML(temp);
        cartProducts.push(temp);
      }

			calcSumCart(cartProducts);
    });

    figcaption.appendChild(button);

    figure.appendChild(figcaption);
    //figure -> figcaption end

    div.appendChild(figure);
    //figure end
  }
}

function addProdCartHTML(elem) {
  let div = document.querySelector(".cart");

  //figure
  let figure = document.createElement("figure");
  figure.classList.add("product");
  figure.id = elem.name;

  //figure -> slider
  let slider = document.createElement("div");
  slider.classList.add("product__slider");

  //figure -> slider -> arrow--back
  let arrow = document.createElement("div");
  arrow.classList.add("slider__arrow");
  arrow.classList.add("slider__arrow--back");

  let pag = document.createElement("img");
  pag.src = "img/pagination__left.svg";

  arrow.appendChild(pag);

  slider.appendChild(arrow);
  //figure -> slider -> arrow--back end

  let img = document.createElement("img");
  img.src = elem.img;
  img.classList.add("slider__img");

  slider.appendChild(img);

  //figure -> slider -> arrow--forward
  arrow = document.createElement("div");
  arrow.classList.add("slider__arrow");
  arrow.classList.add("slider__arrow--forward");

  pag = document.createElement("img");
  pag.src = "img/pagination__right.svg";

  arrow.appendChild(pag);

  slider.appendChild(arrow);
  //figure -> slider -> arrow--forward end

  figure.appendChild(slider);
  //figure -> slider end

  //figure -> figcaption
  let figcaption = document.createElement("figcaption");
  figcaption.classList.add("product__description");

  let h2 = document.createElement("h2");
  h2.textContent = elem.name;
  h2.classList.add("description__name");

  figcaption.appendChild(h2);

  let p = document.createElement("p");
  p.textContent = elem.price;
  p.classList.add("description__price");

  figcaption.appendChild(p);

  //figure -> figcaption -> label
  let label = document.createElement("label");
  label.textContent = "Количество: ";

  let input = document.createElement("input");
  input.classList.add("description__quantity");
  input.value = ++elem.count;
  input.addEventListener("change", () => {
    if (input.value == "" || input.value == "0") {
      elem.count = 0;
			input.value = "0";
    } else {
      elem.count = input.value;
    }
		calcSumCart(cartProducts);
  });

  label.appendChild(input);
  figcaption.appendChild(label);
  //figure -> figcaption -> label end

  let button = document.createElement("button");
  button.classList.add("description__delete");
  button.textContent = "Удалить";
  button.addEventListener("click", () => {
    let temp;
    let array = [];
    for (let i of cartProducts) {
      if (i.name != h2.textContent) {
        array.push(i);
      } else {
        temp = i;
      }
    }
    cartProducts = array;

    deleteProdCartHTML(temp);
		
		calcSumCart(cartProducts);
  });

  figcaption.appendChild(button);

  figure.appendChild(figcaption);
  //figure -> figcaption end

  div.appendChild(figure);
  //figure end

	calcSumCart(cartProducts);
}

function deleteProdCartHTML(elem) {
  elem.count = 0;
  let el = document.getElementById(elem.name);
  el.parentNode.removeChild(el);
}

function calcSumCart(prod) {
  let sum = prod.reduce((acс, elem) => {
    return acс + elem.price * elem.count;
  }, 0); // сумма цен товаров.

	let div = document.querySelector('.cart__sum');

	div.textContent = 'Количество позиций: ' + prod.length + '\nИтоговая сумма: ' + sum;
}

let a = new Product("Велосипед", 100, "img/cycle-1.jpg");
let b = new Product("Самокат", 30, "img/kick_scooter-1.jpg");
let c = new Product("Ролики", 50, "img/roller_skates-1.jpg");
let d = new Product("Скейтборд", 15, "img/skateboard-1.jpg");

let products = [a, b, c, d];
let cartProducts = [];

createCatalogHTML(products);

calcSumCart(cartProducts);