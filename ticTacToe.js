console.log("sanity check");
let game = ['-' , '-' , '-' , '-' , '-' , '-' , '-' , '-' , '-']
let player1 = 'O';

function placeMarker(boxNumber) {
    const box = document.getElementById('box'+boxNumber);
    while(box.innerHTML === '-'){
        if(turn === 'O') {
            turn = 'X';
            box.innerHTML = turn;
            box.style.color = 'black';
        } else if(turn === 'X') {
            turn = 'O';
            box.innerHTML = turn;
            box.style.color = 'black';
        }
    }
}