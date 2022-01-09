//Header Elements change of text:
let headerOne = document.getElementById("myTitle");
console.log(`Our first h1 before change: ${headerOne.innerText}`);
headerOne.innerText = "This is the first change in our HTML document!";

let firstHeader = document.getElementsByTagName("h1")[1];
console.log(`Header h1 without class before change: ${firstHeader.innerText}`);
firstHeader.innerText = "I've changed this as well :)";

let headerThree = document.getElementsByTagName("h3")[0];
console.log(`This is h3 before i change it: ${headerThree.innerText}`);
headerThree.innerText = "Done, and done!";

//Paragraph Elements change of content:

let paragraphOne = document.getElementsByClassName("paragraph");
console.log(`Paragraph with class name paragraph before change: ${paragraphOne[0].innerText}`);
paragraphOne[0].innerText = "This is it...I can feel it!"

let paragraphTwo = document.getElementsByClassName("paragraph second");
console.log(`Paragraph with class name paragraph second before change: ${paragraphTwo[0].innerText}`);
paragraphTwo[0].innerText = "Abra cadabra alakazam...Wait, what?"
