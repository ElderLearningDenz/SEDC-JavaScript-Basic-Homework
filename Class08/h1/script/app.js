let mainButton = document.getElementById('btn');
let animalName = document.getElementById('animalName');
let animalType = document.getElementById('animalType');
let animalAge = document.getElementById('animalAge');
let ul = document.getElementById('first');

animalsArr = [];

function Animal(name, type, age) {
	this.animalName = name;
	this.animalType = type;
	this.animalAge = +age;
}

function listAnimals(arr, element) {
	element.innerHTML = '';
	for (let animal of arr) {
		element.innerHTML += `<li>Name: ${animal.animalName},
         Type: ${animal.animalType},
         Age: ${animal.animalAge}</li>`;
	}
}

mainButton.addEventListener('click', function() {
	let animal = new Animal(animalName.value, animalType.value, animalAge.value);
	animalsArr.push(animal);
	animalName.value = '';
	animalType.value = '';
	animalAge.value = '';
	listAnimals(animalsArr, ul);
});

// console.log(animalsArr);

// function CreateAnimal(name, type, age) {
// 	this.animalN = name;
// 	this.animalT = type;
// 	this.animalA = age;
// }

// let animalOne = new CreateAnimal('Butch', 'Cannary', 3);
// let animalTwo = new CreateAnimal('Tiny', 'Whale', 33);
// let animalThree = new CreateAnimal('Sir Meowsalot', 'Cat', 10);

// console.log(animalOne, animalTwo, animalThree);