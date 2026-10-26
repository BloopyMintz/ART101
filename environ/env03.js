let environmentTitle = "My home away from home";

let environmentElements = ["What is Frutiger Aero?", "Frutiger Aero Avatars", "The Frutiger Family", "Colors of Frutiger Aero"];

let frutigerAvatar = {
    color: " bubble-blue ",
    noise: " *squish* ",
    texture: " jello-like ",
    scent: " blueberry ",
}

let frutigerColors = {
    all: "<p> Blue </p> <p> Green </p> <p> Lime </p> <p> Aqua </p> <p> White </p> "

}

let frutigerFamily = {
    all: "<p> Frutiger Eco </p> <p> Helvetic Aqua Aero </p> <p> Frutiger Aurora </p> <p> Dark Aero </p> "

}

$("#needy-button1").click(function () {


    let message = "Frutiger Aero, also referred to as Web 2.0 Gloss (often mistakenly called ‘Fruitiger Aero’ or ‘Fruitger Aero’), was a widespread design style that dominated various fields, including advertising, media, stock imagery, and technology, from approximately 2004 to 2013. Emerging after the Y2K aesthetic, Frutiger Aero is distinguished by its extensive use of skeuomorphism, glossy textures, vibrant color palettes (especially greens and blues), and nature-inspired elements such as cloudy skies, tropical fish, water, and bubbles. ";

    console.log(frutigerAvatar.color);
     $("#output1").html(message);
});
$("#needy-button2").click(function () {


    let message = "Color:" + frutigerAvatar.color;
    message =  message + "Noise:" + frutigerAvatar.noise;
     message =  message + "Texture:" + frutigerAvatar.texture;
     message =  message + "Scent:" + frutigerAvatar.scent;

    console.log(frutigerAvatar.color);
     $("#output2").html(message);
});

$("#needy-button3").click(function () {


    let message = frutigerColors.all;

    console.log(frutigerAvatar.color);
     $("#output3").html(message);
});

$("#needy-button4").click(function () {


    let message = frutigerFamily.all;

    console.log(frutigerAvatar.color);
     $("#output4").html(message);
});
