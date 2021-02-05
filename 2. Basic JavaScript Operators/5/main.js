function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

let x = Number(prompt("Введите число"));
let y = Number(prompt("Введите еще одно число"));

alert("Сумма = " + addition(x, y));
alert("Разность = " + subtraction(x, y));
alert("Произведение = " + multiplication(x, y));
alert("Частное = " + division(x, y));