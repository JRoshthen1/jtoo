// GREETING
const greetings = {
		// Greetings
		Morning: 'Good morning!',
		Afternoon: 'Good afternoon,',
		Evening: 'Good evening,',
		Night: 'Go to Sleep!',
}
const gree1 = `${greetings.Night}\xa0`;
const gree2 = `${greetings.Morning}\xa0`;
const gree3 = `${greetings.Afternoon}\xa0`;
const gree4 = `${greetings.Evening}\xa0`;


//TIME
const time = new Date();
const hour = time.getHours();
const name = "Friend";

// select which greeting to display
if (hour >= 23 || hour < 5) {
	document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greetings').innerText = gree3 + name;
} else {
	document.getElementById('greetings').innerText = gree4 + name;
}


// DATE
window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();


	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = ' : ';
	document.getElementById('minutes').innerText = min;

	document.getElementById('month').innerText = mm;
	document.getElementById('day').innerText = dd;

	setTimeout(displayClock, 60000);
}
