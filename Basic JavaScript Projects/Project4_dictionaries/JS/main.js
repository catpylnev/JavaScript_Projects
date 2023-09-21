function my_Dictionary(){ //function to call my dictionary
    var Animal = { //created a dictionary
        Species:"Cat",
        Color:"Ginger",
        Breed:"American Shorthair",
        Age:5,
        Sound:"Meow!"
    };
    delete Animal.Species; //deleted one of the entries in the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Species; //displays the entry that it calls for
}