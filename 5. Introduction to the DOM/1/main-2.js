function createChessboard() {
    let base = document.createElement('div');
    base.classList.add('board--base');
    
    let board = document.querySelector('.chessboard');
    
    for (let i = 0; i < 64; i++) {
        let div = document.createElement('div');
        div.classList.add('cage');
        if ((i < 8) || ((i > 15) && (i < 24)) || ((i > 31) && (i < 40)) || ((i > 47) && (i < 56))) {
            if (i % 2 == 0) div.classList.add('bg--white');
            else div.classList.add('bg--black');
        }
        else {
            if (i % 2 == 1) div.classList.add('bg--white');
            else div.classList.add('bg--black');
        }
        base.appendChild(div);
    }
    
    board.appendChild(base);
    
    let left = document.createElement('div');
    left.classList.add('board--left');
    let right = document.createElement('div');
    right.classList.add('board--right');
    
    for (let i = 1; i < 9; i++) {
        let div = document.createElement('div');
        div.classList.add('column--cage');
        switch(i) {
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
        
        left.appendChild(div);
        right.appendChild(div.cloneNode(true));
    }
    
    board.appendChild(left);    
    board.appendChild(right);
    
    let top = document.createElement('div');
    top.classList.add('board--top');
    let bottom = document.createElement('div');
    bottom.classList.add('board--bottom');
    
    for (let i = 1; i < 9; i++) {
        let div = document.createElement('div');
        div.classList.add('row--cage');
        div.textContent = i;
        
        top.appendChild(div);
        bottom.appendChild(div.cloneNode(true));
    }
    
    board.appendChild(top);
    board.appendChild(bottom);
}

createChessboard();