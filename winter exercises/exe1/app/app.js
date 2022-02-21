//This is Exercise 1

// let mightyVar = 'Dejan';
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = 5;
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = true;
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = function() {};
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = {};
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = [];
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = '';
// console.log(mightyVar, 'This is:', typeof mightyVar);
// mightyVar = NaN;
// console.log(mightyVar, 'This is:', typeof mightyVar);
// let myStory;
// console.log(myStory, 'This is:', typeof myStory);

//This Is Exercise 2

// let varIntro = prompt('What is Your Name?');
// alert('Merry Christmas ' + varIntro + '!');

//This is Exercise 3

// let rectangleWidth = +prompt('How much is the width of the rectangle?');
// let rectangleHeight = +prompt('How about the height of this rectangle?');

// function rectanglePerimeter(x, y) {
// 	let perimeter = 2 * (x + y);
// 	return perimeter;
// }

// alert(rectanglePerimeter(rectangleWidth, rectangleHeight));

//This is Exercise 4

// let enterNumber = +prompt('Please Enter A Number');
// let preNumber = enterNumber - 1;
// let succNumber = enterNumber + 1;

// alert(
// 	'Number ' + preNumber + ' is predecessor to ' + enterNumber + ', while number ' + succNumber + ' is its successor.'
// );

//This is Exercise 5

// let numberA = +prompt('Enter Value:');
// let numberB = +prompt('Enter Second Value');
// let oneHundred = 100;

// function closerToHundred(x, y) {
// 	if (x < 0) {
// 		alert('Invalid Number');
// 	} else if (y < 0) {
// 		alert('Invalid Number');
// 	} else if (x == y) {
// 		alert(
// 			`The first and The second value were with the same result: ${numberA} ${numberB} , so neither is closer to ${oneHundred}`
// 		);
// 	} else if (x < y) {
// 		alert(`Number ${y} is closer to ${oneHundred}`);
// 	} else if (y < x) {
// 		alert(`Number ${x} is closer to ${oneHundred}`);
// 	}
// }

// closerToHundred(numberA, numberB);

//This is Exercise 6

// function showResult(x, y) {
// 	sum = x + y;
// 	if (x == y) return sum * 3;
// 	return sum;
// }

// console.log(showResult(5, 5));

//This is Exercise 7

// let mathExam = +prompt('What was your Math grade?');
// let englishExam = +prompt('What was the score of your English exam?');
// let musicExam = +prompt('What was your music score?');
// let exerciseExam = +prompt('What was your exercise score?');
// let programmingExam = +prompt('What is your score on the programming exam?');

// let avg = (mathExam + englishExam + musicExam + exerciseExam + programmingExam) / 5;

// if (avg >= 8) {
// 	alert(`Congrats student you have finished your first semester successfully! Your Score was: ${avg}`);
// } else {
// 	alert(`You have failed your first semester! Your Score was: ${avg}`);
// }

//This is Exercise 8

// let valA = 31;
// let valB = 19;

// let sum = valA + valB;

// function checkNumbers(x, y) {
// 	if (x > 30 || y > 30) {
// 		console.log(true);
// 	} else if (sum == 50) {
// 		console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// }

// checkNumbers(valA, valB);

//This is Exercise 9

// function numberDivisibleByThree(x) {
// 	if (x % 3 == 0) {
// 		console.log(`The number ${x} is divisible by 3`);
// 	} else {
// 		console.log(`The number ${x} is not divisible by 3`);
// 	}
// }

// numberDivisibleByThree(9);

//This is Exercise 10

// let enterWord = prompt('Please enter some random word');

// function checkString(string) {
// 	if (string.includes('a', 'e', 'i', 'o', 'u')) {
// 		alert(`Hit ${string} Hit`);
// 	} else {
// 		alert(`${string}`);
// 	}
// }

// checkString(enterWord);

//This is Exercise 11

// let enterSomeWord = prompt('Please enter some word');

// function checkWord(word) {
// 	if (word.endsWith('na')) {
// 		console.log('Hit');
// 	} else {
// 		console.log('Miss');
// 	}
// }

// checkWord(enterSomeWord);

//This is Exercise 12

// let gradeInput = prompt('Please enter your programming grade!');

// switch (gradeInput) {
// 	case 'a':
// 		alert('Excellent job!');
// 		break;
// 	case 'b':
// 		alert('Good job!');
// 		break;
// 	case 'c':
// 		alert('Passed!');
// 		break;
// 	case 'd':
// 		alert('Not so good!');
// 		break;
// 	case 'f':
// 		alert("You've failed!");
// 		break;
// }

//This is Exercise 13

// let currentDate = new Date().getFullYear();
// let bYear = prompt('What year were you born?');

// function ageCalculator(currentYear, birthYear) {
// 	let age = currentYear - birthYear;
// 	alert(`You are ${age} years old.`);
// }

// ageCalculator(currentDate, bYear);

//This is Exercise 14
// let introArr = [ 'hello', 'my', 'name', 'is', 'dejan' ];

// function printString(arr) {
// 	let randomString = '';
// 	for (let item of arr) {
// 		randomString += item + ' ';
// 		console.log(randomString);
// 	}
// }

// printString(introArr);

//This is Exercise 15

// let numbersArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// function separateNumbers(arr) {
// 	let even = [];
// 	let odd = [];

// 	for (let item of arr) {
// 		if (item % 2 === 0) {
// 			even.push(item * 2);
// 			console.log(`This is array of even numbers multiplied by 2: ${even}`);
// 		} else {
// 			odd.push(item * 3);
// 			console.log(`This is array of odd numbers multiplied by 3: ${odd}`);
// 		}
// 	}
// }

// separateNumbers(numbersArr);

//This is Exercise 16

// let someArray = [ 'banana', 'Dejan', 2, 'boo', false, 'abracadabra', 'no', true, 454 ];
// console.log(`This is the array from which we take the longest and the shortest string: ${someArray}`);

// function cleanArray(array) {
// 	cleanArray = [];
// 	for (let item of array) {
// 		if (typeof item === 'string') cleanArray.push(item);
// 		console.log(cleanArray);
// 	}
// }

// function detectShortLongString(arr) {
// 	let longest = '';
// 	let shortest = someArray[0];
// 	for (let i in arr) {
// 		if (arr[i].length > longest.length) longest = arr[i];
// 		if (arr[i].length < shortest.length) shortest = arr[i];
// 	}
// 	console.log(`This is the longest word in the array "${longest}", while this is the shortest "${shortest}"`);
// }

// cleanArray(someArray);

// detectShortLongString(someArray);
