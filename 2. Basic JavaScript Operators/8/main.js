function power(val, pow) {
    if(pow <= 1)
        return val;
    else{
        val *= power(val, --pow);
        return val;
    }
}

let v = prompt('Введите число');
let p = prompt('Введите показатель степени');

alert(power(v,p));