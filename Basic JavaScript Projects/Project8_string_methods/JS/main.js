function full_Sentence(){ //function to concatenate a full sentence
    var part_1= "I have "; //slices of the sentence
    var part_2= "made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //concatenate the parts
    document.getElementById("Concatenate").innerHTML = whole_sentence;  //display the full sentence
};

function slice_Method() { //slice function
    var Sentence = "All work and no play makes Johnny a dull boy."; //our sentence
    var Section = Sentence.slice(27, 33); //displaying the word johnny
    var Upper = Section.toUpperCase(); //upper case the chosen word
    document.getElementById("Slice").innerHTML = Upper; //displaying the uppercased word


    var pattern = /play/; //what search is looking for
    var position = Sentence.search(pattern); //search
    console.log(position); //the position is displayed in console log

}

function string_Method(){   //variable to string function
    var X = 182; //our variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //displays variable number as string
}

function precision_Method(){ // precision functions 
    var X = 12935.3012986735960; //my very long number
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //precision of 10
    var fixedValue = X.toFixed(4); //fixed decimals at 4
    var valueOfX = X.valueOf(); 

    //displaying results in console log
    
    console.log("Using toFixed(4):", fixedValue);
    console.log("Using valueOf():", valueOfX);
}
