var yearOfBirth = prompt("What is the year of your birth?");
var intYearOfBirth = parseInt(yearOfBirth);
var birthInput = (intYearOfBirth - 4)%12;

if(birthInput<=0){
    alert("Your inner Demon is Rat");
}else if(birthInput<=1){
    alert("Your Chinese Zodiac Sign is Ox");
}else if(birthInput<=2){
    alert("Your Chinese Zodiac Sign is Tiger");
}else if(birthInput<=3){
    alert("Your Chinese Zodiac Sign is Rabbit");
}else if(birthInput<=4){
    alert("Your Chinese Zodiac Sign is Dragon");
}else if(birthInput<=5){
    alert("Your Chinese Zodiac Sign is Snake");
}else if(birthInput<=6){
    alert("Your Chinese Zodiac Sign is Horse");
}else if(birthInput<=7){
    alert("Your Chinese Zodiac Sign is Goat");
}else if(birthInput<=8){
    alert("Your Chinese Zodiac Sign is Monkey");
}else if(birthInput<=9){
    alert("Your Chinese Zodiac Sign is Rooster");
}else if(birthInput<=10){
    alert("Your Chinese Zodiac Sign is Dog");
}else if(birthInput<=11){
    alert("Your Chinese Zodiac Sign is Pig");
}else{
    alert("Sorry, wrong input try again.")
}

