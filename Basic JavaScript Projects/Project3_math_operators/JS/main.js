function addition_Function() {
    var addition = 2+2;
    document.getElementById("MathAdd").innerHTML = "2+2=" + addition;
}

function subtraction_Function() {
    var  subtraction = 2-2;
    document.getElementById("MathSub").innerHTML = "2-2=" + subtraction;
}

function multiply_Function() {
    var multi = 2*2;
    document.getElementById("MathMult").innerHTML = "2*2=" + multi;
}

function divide_Function() {
    var  divide = 2 / 2;
    document.getElementById("MathDivi").innerHTML = "2/2=" + divide;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in hald and then subtracted by 5 equals " + simple_Math
}

function modulus_Operator() {
    var remain_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remain_Math;
}

function negation_operator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = -x
}