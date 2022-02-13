$(document).ready(function() {
	let textInput = $('#textInput');
	textInput.val('Blah Blah').css('color', 'orange');
	let colorInput = $('#colorInput').val('#e66465');
	$('#btn').click(function() {
		$('#wrapper').append('<h1>Hello Wolrd!</h1>');
	});
	$('h3').text("Let Me Guess...I've Done it?");
	let namelessDiv = $('div').last().append("<p>I'm Dracula...No I'm not 😢</p>");
	namelessDiv.css('text-decoration', 'line-through');
});