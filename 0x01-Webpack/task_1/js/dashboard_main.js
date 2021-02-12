import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');
let count = 0;

function updateCounter() {
	count += 1;
	return count;
}
$('button').on('click', _.debounce(() => {
		let count = updateCounter();
    $("#count").text(`${count} clicks on the button`);
	}));
