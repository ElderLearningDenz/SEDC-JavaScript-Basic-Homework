let mainDiv = document.getElementById('mainDiv');
let heading = document.getElementById('title');
let myTable = document.createElement('table');
let tableBody = document.createElement('tbody');
let tableHead = document.createElement('thead');
mainDiv.append(myTable);
myTable.append(tableBody);
myTable.prepend(tableHead);
myTable.style.border = '2px solid black';
tableHead.style.color = 'red';

let titleInput = prompt('What is the name of the recipe?');

tableHead.innerHTML = `<tr><th style="border: 1px solid black">${titleInput}</th></tr>`;

let ingrInputs = +prompt('How many ingredients are we gonna need?');

arr = [];

for (let i = 0; i < ingrInputs; i++) {
	let ingredients = prompt('Please enter ingredient:');
	arr.push(ingredients);
}

for (input of arr) {
	tableBody.innerHTML += `<tr><td>${input}</td></tr>`;
}