function countdown(){ //countdown function 
    var seconds = document.getElementById("seconds").value; //get seconds from input
    function tick(){ //update time every second
        seconds = seconds-1; //decrement the seconds
        timer.innerHTML = seconds; //update the timer display
        var time = setTimeout(tick, 1000); //scheduled ticks after 1 second
        if (seconds ==-1){ //when reached 0
            alert("Time's up!"); //display that time is up
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick(); //start the countdown
}

//slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

//function to move to next or prev slide
function plusSlides(n){
    showSlides(slideIndex += n);
}

//function to show specific slide
function currentSlide(n){
    showSlides(slideIndex = n);
}

//function to display slides and update dot indicators
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1} //reset slide index if it goes out of bounds
    if (n < 1) {slideIndex = slides.length} 
    for (i = 0; i < slides.length; i++){ //hide all slides
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++){ //remove active class from dots
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //show the current slide and update the dot indicator
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}