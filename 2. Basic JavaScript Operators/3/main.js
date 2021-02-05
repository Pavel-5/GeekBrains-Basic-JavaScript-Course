let a = Number(prompt("Введите любое число"));
let b = Number(prompt("Введите еще одно любое число"));
let result;

if ((a >= 0) && (b >= 0)) {
    if (a > b) {
        result = a - b;
    }
    else {
        result = b - a;
    }
}
else if ((a < 0) && (b < 0)) {
    result = a * b;
}
else {
    result = a + b;
}

alert(result);