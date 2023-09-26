function count_To_Ten(){ // while loop counting function
    var Digit = "";
    var X = 1; //starts at 1
    while (X<11) {
        Digit +="<br>" + X; // while under 11 (counting to 10)
        X++; // add 1 every loop
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

let text = "Hello World!"; 
let length = text.length; //find length of string 
console.log(length);  //console log

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //array of isntruments
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; //displays all instruments in array by placement
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){  //function that describes an activity in html
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is " + Cat_Picture[2] + ".";
}

function constant_function(){ //function using constant 
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //constant
    Musical_Instrument.color = "blue"; //editing const
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33; 
    document.write("<br>" + X);
}
document.write("<br>" + X);


var R = returnFunction(5,3); //function to return two numbers
 function returnFunction(a, b) {
    return a * b; //using the return command
 }
 console.log(R); //result in console log

 let Car = { //let for description function
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model; //function returns characteristics.
    }
 };
 document.getElementById("Car_Object").innerHTML = Car.description();