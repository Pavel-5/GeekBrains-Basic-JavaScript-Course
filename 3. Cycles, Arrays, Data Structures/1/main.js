let count = 2, mas = [1];

console.log(mas[0]);

while (count <= 100) {
    let flag = false;
    for (let i = 1; i < mas.length; i++) {
        if (count / 2 >= mas[i]) {
            if (count % mas[i] == 0) {
                flag = true;
                break;
            }
        }
        else break;
    }
    
    if (!flag) {
        mas.push(count);
        console.log(count);
    }
    
    count++;
}

//for (let i = 0; i < mas.length; i++) {
//    console.log(mas[i]);
//}