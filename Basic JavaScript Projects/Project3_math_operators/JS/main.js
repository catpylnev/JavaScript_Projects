function addition_Function() { //addition function
    var addition = 2+2; //add 
    document.getElementById("MathAdd").innerHTML = "2+2=" + addition; //show the result 
}

function subtraction_Function() { //create a subtraction function
    var  subtraction = 2-2; 
    document.getElementById("MathSub").innerHTML = "2-2=" + subtraction; // show the result
}

function multiply_Function() { //multiplication function
    var multi = 2*2; 
    document.getElementById("MathMult").innerHTML = "2*2=" + multi;// show the result
}

function divide_Function() {  //create division function
    var  divide = 2 / 2; 
    document.getElementById("MathDivi").innerHTML = "2/2=" + divide;// show the result
}

function more_Math() { //create simiple math function
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in hald and then subtracted by 5 equals " + simple_Math// show the result
}

function modulus_Operator() { //show what modulus operator function
    var remain_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remain_Math; // show the result
}

function negation_operator() { //show negation operator function
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;// show the result
}

var a = 8; 
a++; //increment operator
document.write(a);

document.write(" and ")

var b = 5.25;
b--; //decrement operator
document.write(b);

window.alert(Math.random()*100); //pick a random number 0-100


const radius = 5; 
const area = Math.PI * Math.pow(radius, 2);
document.write(`The area of the circle is: ${area}`);