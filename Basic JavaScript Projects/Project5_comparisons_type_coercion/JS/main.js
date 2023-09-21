 document.write(typeof "Word");
document.write(typeof 3);
document.write("10" + 5);

/*
function my_FunctionNeg() {
    //document.getElementById("Test").innerHTML = 0/0
    //document.getElementById("Test").innerHTML = isNaN('Hello');
    document.write(-2E310);
}

function my_FunctionPos() {
    //document.getElementById("Test").innerHTML = 0/0
    //document.getElementById("Test").innerHTML = isNaN('Hello');
    document.write(2E310);
}

document.write(10>2); //boo true
document.write(10<2); //boo false

console.log(10<2); //console log false
*/ //Testing all the assignments!

document.write(10==10); // comapring true
document.write(3 == 11); //comparing false


function my_FunctionTripT() {
    x=10;
    y=10;
    document.write(x===y); //true ensuring to match the data type and value
}

function my_FunctionTripF() {
   x=82
   y="82"
    document.write(x===y); //false Return false by writing a different data type but the same value for both
}

function my_FunctionTripF2() {
    x=82
    y=50
     document.write(x===y); //writing the same data type but a different value for both.
 }

 function my_FunctionTripF3() {
    x=40
    y="hi"
     document.write(x===y);//writing a different data type and different value.
 }


document.write(5>2 && 10>4); //true with and
document.write(5>10 && 10>4); //false with and
document.write(5>10 || 10>4); //true with or
document.write(5>10 || 10<4); //true with and

function not_Function(){
    document.getElementById("Not").innerHTML = !(5>10); //function with not false
}
