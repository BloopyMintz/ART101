// the clicker button progrm

// traccking how many times button is clicked
let count=0;
let colorsCount=0;

let colors=["green", "orange", "brown", "yellow", "aqua", "purple", "red", "pink"];

let buttonText="mood"


// green, orange, brown, yellow, gold, purple, red, pink 



//Find the element with the id "needy-button" and tell it what to do when clocked
$("#needy-button").click(function(){
    // Each time the button is clicked, increase count by 1
    // what to do when the button is clicked
    count = count +1;
    //colorsCount= colorsCount +1;

    console.log(count);
    console.log(colors[colorsCount]);
    // Change the button's text to show how many times it's been clicked

    buttonText="meowity has been poked " + count + " times gulp and color is " + colors[colorsCount];
    $("#needy-button").html( buttonText );

    $("body"). css( "background-color", colors[colorsCount] );

    //$("body").append("<img src'" +colors[count-1] +".jpg'>" );

    // if we run out of colors start from the first one

    if ( count >= 16) { $("#needy-button").after("<p>my mood is... educated!</p>"); }
    else if (count >= 13) { $("#needy-button").after("<p>my mood is... real agitated</p>");}
    else if ( (count >= 5) && (count < 13) ) { $("#needy-button").after("<p>my mood is... agitated</p>");}



    //if ( (count >= 5) && (count < 13) ) { $("#needy-button").after("<p>my mood is... agitated</p>");}

    //if(count >= 13) { $("#needy-button").after("<p>my mood is... real agitated</p>");}

    //if(count >= 16) { $("#needy-button").after("<p>my mood is... educated!</p>");}



    colorsCount= colorsCount +1;

    if ( colorsCount >= 8) { colorsCount = 0; }

    //if ( count < 5) {buttonText = "fresh and happy".html( buttonText );} ;


    //If count is less than 5, the mood variable equals to “fresh and happy”
//When count is more or equals 5 but less then 10mood is “keep pushing”
//In all other cases mood is “so tired!”



   

});