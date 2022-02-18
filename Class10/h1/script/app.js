let button = document.getElementById('btn');
let div = document.getElementById('main');
let paragraph = document.getElementById('paragraph');
fetch('https://jsonplaceholder.typicode.com/todos')
	.then((response) => response.json())
	.then((result) => {
		console.log(result);
		button.addEventListener('click', function() {
			for (let item of result) {
				div.innerHTML += `<ul><li>ID#${item.userId}<br>Title:"${item.title}"<br>Task: ${item.completed
					? 'Completed'
					: 'Uncompleted'}</li></ul>`;
			}
		});
	})
	.catch((err) => {
		console.log('An error has occured!');
	});