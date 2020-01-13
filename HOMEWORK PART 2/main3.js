/*
HOMEWORK PART 2
Create a header generator

Craete two inputs, one for text and one for color
Create a button that says: generate h1
Create an h3 element for messages
When the button is clicked create a new header below the inputs and button
The new header should have the text and color from the inputs
If the person enters an invalid color or an empty text show an error message to the message element
You must use JQuery to complete the task
*/

let btn = $("#btn");

btn.click(() => {
    let msg = $("#message").val();
    let color = $("#color").val();
    $("<h1></h1>").appendTo("#parent");

    switch (color) {
        case "blue":
            $("h1").first().text(`${msg}`).css("color", "blue");
            break;

        case "red":
            $("h1").first().text(`${msg}`).css("color", "red");
            break;

        case "green":
            $("h1").first().text(`${msg}`).css("color", "green");
            break;

        case "yellow":
            $("h1").first().text(`${msg}`).css("color", "yellow");
            break;

        case "white":
            $("h1").first().text(`${msg}`).css("background-color", "black").css("color", "white");
            break;

        case "black":
            $("h1").first().text(`${msg}`).css("color", "black");
            break;

        default:
            $("h3").first().text("Please choose another color. Your options are: blue, red, green, yellow, white, black").css("font-style", "italic").css("color", "gray");
            break;
    }
});