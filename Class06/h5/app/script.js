let buttonInput = document.getElementById('btn');
function createDynamicTable() {
	let rowNumber = +prompt('How many rows woruld you like in the table?');
	let dataNumber = +prompt('How many columns would you like to have in the table?');
	var body = document.getElementsByTagName('body')[0];

	let dynTable = document.createElement('table');
	let tableBody = document.createElement('tbody');

	for (let i = 0; i < rowNumber; i++) {
		let tableRow = document.createElement('tr');

		for (let j = 0; j < dataNumber; j++) {
			let tableData = document.createElement('td');
			let tableDataInput = document.createTextNode(`Row num: ${i + 1}, column num:${j + 1}`);
			tableData.appendChild(tableDataInput);
			tableRow.appendChild(tableData);
		}

		tableBody.appendChild(tableRow);
	}

	dynTable.appendChild(tableBody);
	body.appendChild(dynTable);
	dynTable.setAttribute('border', '2');
}

buttonInput.addEventListener('click', createDynamicTable);