
//ASSIGN A LOCAL VARIABLE AND A GLOBAL VARIABLE 
function Add_numbers_1(){
    var X = 10;  
    var Y = 15
    console.log(Y + X);
}

function Add_numbers_2() {
    console.log(X + 100); // Console shows error because x is not global fixed by putting global x var
}

Add_numbers_1();
Add_numbers_2();



// my if  function requirment 1 gets user input and displays message based on time
function get_Date() {
    var userInput = parseInt(document.getElementById("UserInput").value); //retrieves user input

    if (userInput < 0 || userInput > 23) { //asks for a valid time
        document.getElementById("Greeting").innerHTML = "Please enter a valid time (0-23).";
    } else if (userInput < 12) { //if the morning, ask about morning
        document.getElementById("Greeting").innerHTML = "How was your morning?";
    } else { // displays greeting for rest of the day
        document.getElementById("Greeting").innerHTML = "How was your day?";
    }
}


//Time_function as outlined
function Time_function(){ 
    var Time = new Date().getHours(); //get current hour of the day
    var Reply;
    if (Time<12 == Time > 0){ //checks if its morning
        Reply= "It is morning time!";
    }
    else if(Time >= 12 == Time < 18){ //checks if its afternoon
        Reply = "It is afternoon.";
    }
    else{ //assumes it is evening if not morning or afternoon
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //displays the determined time of day message.
}