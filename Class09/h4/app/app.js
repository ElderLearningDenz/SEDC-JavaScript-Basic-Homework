$(document).ready(function () {
  let inputOne = $("#inputOne");
  let inputTwo = $("#inputTwo");
  let inputThree = $("#inputThree");
  let mainButton = $("#btn");

  mainButton.click(function () {
    let arr = [];
    arr.push(+inputOne.val(), +inputTwo.val(), +inputThree.val());
    inputOne.val("");
    inputTwo.val("");
    inputThree.val("");

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
    if (avg >= 10) {
      $("#wrapper")
        .append(`<h2>The Result is: ${avg}</h2>`)
        .css("color", "green");
    } else {
      $("#wrapper")
        .append(`<h2>The Result is: ${avg}</h2>`)
        .css("color", "red");
    }

    console.log(arr);
  });
});
