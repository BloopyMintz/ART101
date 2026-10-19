// the clicker button progrm

// traccking how many times button is clicked
let count=1;

//Find the element with the id "needy-button" and tell it what to do when clocked
$("#needy-button").click( function(){
    // Each time the button is clicked, increase count by 1
    // what to do when the button is clicked
    count = count * 2;
    // Change the button's text to show how many times it's been clicked
    $("#needy-button").html("meowity has been poked " +  
         count + " times gulp");
});