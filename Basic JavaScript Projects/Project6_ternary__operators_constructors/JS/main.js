function Ride_Function() { //function that uses ternary operation using inpit
    var Height, Can_ride;
    Height = document.getElementById("Height").value; //calls input from browser
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //compares input 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //output based on compare
}


function Vehicle(Make, Model, Year, Color) { //function that uses this keyword
    this.Vehicle_Make = Make; //
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //new keyword
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "WHite and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction(){ //constructor function that uses vehicle 
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " +Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " +Erik.Vehicle_Year;
}


function count_Function(){ //function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){ //nested function
        var Starting_point = 9; 
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}