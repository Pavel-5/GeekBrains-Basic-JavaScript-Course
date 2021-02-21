function createChessboard() {    
    let board = document.querySelector('.chessboard');
    
    let countColumn = 1;
    let countRow = 1;
    
    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div');
        
        if((i == 0) || (i == 9) || (i == 90) || (i == 99)) {
            div.classList.add('angle--cage');
        }
        else if(((i >= 1) && (i <= 8)) || ((i >= 90) && (i <= 100))) {
            div.classList.add('row--cage');
            if(countRow < 9) {
                div.textContent = countRow;
            }
            else {
                div.textContent = countRow - 8;
            }
            
            countRow++;
        }
        else if((i % 10 == 0) || ((i + 1) % 10 == 0)) {
            div.classList.add('column--cage');
            
            switch(Math.ceil(countColumn / 2)) {
                case 1:
                    div.textContent = 'A';
                    break;
                case 2:
                    div.textContent = 'B';
                    break;
                case 3:
                    div.textContent = 'C';
                    break;
                case 4:
                    div.textContent = 'D';
                    break;
                case 5:
                    div.textContent = 'E';
                    break;
                case 6:
                    div.textContent = 'F';
                    break;
                case 7:
                    div.textContent = 'G';
                    break;
                case 8:
                    div.textContent = 'H';
                    break;
            }
            
            countColumn++;
        }
        else {
            div.classList.add('cage');
            
            if((i < 19) || ((i > 30) && (i < 39)) || ((i > 50) && (i < 59)) || ((i > 70) && (i < 79))) {
                if (i % 2 == 1) div.classList.add('bg--white');
                else div.classList.add('bg--black');
                
            }
            else {
                if (i % 2 == 0) div.classList.add('bg--white');
                else div.classList.add('bg--black');
            }
        }
        
        board.appendChild(div);
    }
}

createChessboard();