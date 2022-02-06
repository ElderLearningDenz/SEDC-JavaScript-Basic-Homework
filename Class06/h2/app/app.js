let titleDiv = document.getElementById("title"); 
let contentDiv = document.getElementById("result"); 
let result = 0; 

function printWeight(weight,result,titleElement,contentElement){ 
  result = weight / 0.5; 
  if(weight =="" || weight == null){ 
    alert("You must enter your weight, try again!"); 
    return 
  }
  titleElement.innerHTML += `<h2>Thanks for your courage :) <br> Your weight is: ${weight}kg</h2>`; 
  contentElement.innerHTML += `<p>You are gonna need ${result} chickens to equal your weight. Are we feeling heavy already?</p>`; 
} 

let yourWeight = +prompt("What is your weight, if i may ask?"); 

printWeight(yourWeight,result,titleDiv,contentDiv);