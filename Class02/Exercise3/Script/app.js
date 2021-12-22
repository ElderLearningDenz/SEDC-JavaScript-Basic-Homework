var numberOne = prompt("Please enter a number:");
var numberTwo = prompt("Please enter a number:");
var numberThree = prompt("Please enter a number:");
var numberFour = prompt("Please enter a number:");
var numberFive = prompt("Please enter a number:");

var intNumberOne = parseInt(numberOne);
var intNumberTwo = parseInt(numberTwo);
var intNumberThree = parseInt(numberThree);
var intNumberFour = parseInt(numberFour);
var intNumberFive = parseInt(numberFive);

if(intNumberOne>intNumberTwo && intNumberOne>intNumberThree && intNumberOne>intNumberFour && intNumberOne>intNumberFive){
    alert(`Your maximum number is ${intNumberOne}`)
}else if(intNumberTwo>intNumberOne && intNumberTwo>intNumberThree && intNumberTwo>intNumberFour && intNumberTwo>intNumberFive){
    alert(`Your maximum number is ${intNumberTwo}`)
}else if(intNumberThree>intNumberOne && intNumberThree>intNumberTwo && intNumberThree>intNumberFour && intNumberThree>intNumberFive){
    alert(`Your maximum number is ${intNumberThree}`)
}else if(intNumberFour>intNumberOne && intNumberFour>intNumberTwo && intNumberFour>intNumberThree && intNumberFour>intNumberFive){
    alert(`Your maximum number is ${intNumberFour}`)
}else if(intNumberFive>intNumberOne && intNumberFive>intNumberTwo && intNumberFive>intNumberThree && intNumberFive>intNumberFour){
    alert(`Your maximum number is ${intNumberFive}`)
}else{
    alert("Sorry wrong input, please try again.")
}