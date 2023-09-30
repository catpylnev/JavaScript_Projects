let activePlayer = 'X'; // initialize active player X
let selectedSquares = []; //initialize an array to keep track of selected squares

function placeXOrO(squareNumber) { //function to place X or O in squares
    if (!selectedSquares.some(element => element.includes(squareNumber))){ //check if square is already selected
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X'){ //sets background image based on active player
            select.style.backgroundImage = 'url("./images/x.png")';
        } else {
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer); //add square to the selectedSquares array
    
        checkWinConditions(); //check win conditions outlined

        if(activePlayer === 'X'){ //player switch
            activePlayer = 'O';
        } else {
            activePlayer='X';
        }
        audio('./media/place.mp3'); //playing a place sound
        if (activePlayer === 'O') { //computer's turn disables player 1 clicking
            disableClick();
            setTimeout(function() {computersTurn(); }, 1000);
        }
        return true;
    }
//handle computer's turn with random placement 
    function computersTurn(){
        let success = false;
        let pickASquare;
        while(!success){
            pickASquare = String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success=true;
            };
        }
    }
}

function checkWinConditions(){ //function that checks win condition possibilities
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if (selectedSquares.length>= 9){
        audio('./media/tie.mp3');  //plays sound for tie
        setTimeout(function(){resetGame();}, 500);
    }   

    function arrayIncludes(squareA, squareB, squareC){ // define function to check array for elements
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true){return true;}
    }
    
}

function disableClick(){ //define disable click function for computer tun
    body.style.pointerEvents = 'none';
    setTimeout(function(){body.style.pointerEvents='auto'; }, 1000);
}

function audio(audioURL){ //function to play audio
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //function to draw a winning line
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1, 
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    function animateLineDrawing(){ //animation function
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2){ //update animation coordinates
            if(x < x2){x+=10;}
            if(y < y2){y+=10;}
            if(x >= x2 && y >= y2 ){ cancelAnimationFrame(animationLoop);}
        }
        if (x1<=x2 && y1>= y2){
            if(x<x2){x +=10;}
            if(y>y2){y -=10;}
            if(x >= x2 && y<=y2){cancelAnimationFrame(animationLoop);}
        }
    }
    function clear(){ //clears canvas to restart
        const animationLoop=requestAnimationFrame(clear);
        c.clearRect(0, 0, 608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick(); //winning game steps to restart game
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function(){clear(); resetGame() }, 1000);
}

function resetGame(){ ///reset game function
    for(let i  = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}