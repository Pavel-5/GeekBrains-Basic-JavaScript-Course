'use strict';

function GetObjectFromNumber(num) {
    if((num <= 999) && (num >= 0)) {
        this['единицы'] = num % 10;
        this['десятки'] = Math.trunc(num / 10) % 10;
        this['сотни'] = Math.trunc(num / 100);
    }
    else {
        console.log('Число должно принадлежать промежутку [0, 999]');
        return {};
    }
}

let a = new GetObjectFromNumber(567);

console.log(a);