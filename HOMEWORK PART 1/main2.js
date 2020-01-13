/*
HOMEWORK PART 1
CREATE A GREETING APP WITH JQUERY
Create an input
Create a button
When clicked the button should print a greet message in an h1 header
Ex: input: Dragan output message: Hello there Dragan!

You must use JQuery to complete the task
*/

let btn = $("#btn");

btn.click(() => {
    let name = $("#name").val();
    $("h1").first().text(`Hello there ${name}`);
});