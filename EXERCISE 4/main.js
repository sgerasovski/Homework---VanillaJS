/*
EXERCISE 4
Create three inputs for numbers
Print the average of the three numbers in an h1 element
If the average is larger or the same as 10 the result should be in green
If the average is smaller than 10 the result should be red


Do this with JQuery
*/


let btn = $("#btn");
btn.click(() => {
    let firstNum = $("#first").val();
    let secondNum = $("#second").val();
    let thirdNum = $("#third").val()
    let sum = parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum);
    let avg = sum / 3;
    if (avg >= 10) {
        $("h1").first().text(`The average is ${avg}`)
        $("h1").first().css("color", "green");
    } else {
        $("h1").first().text(`The average is ${avg}`)
        $("h1").first().css("color", "red");
    }
});