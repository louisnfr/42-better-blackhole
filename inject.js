const login = document
	.getElementsByClassName('login')[0]
	.getAttribute('data-login');

const blackhole_url = "https://profile.intra.42.fr/users/" + login + "/goals?cursus=42cursus";

fetch(blackhole_url)
	.then(response => response.json())
	.then(data => {
		const days_left = data['singularity'];
		if (!days_left)
			throw "No days found in data";
		const bh_date = data['date'];

		const status = {
			'dead': {color: "#808080", text: "since absorption ", emote: "💀"},
			'sad': {color: "#E55656", text: "left ", emote: "😰"},
			'scared': {color: "#FFA500", text: "left ", emote: "😬"},
			'happy': {color: "#5CB85C", text: "left ", emote: "😌"},
			'wow': {color: "#FFD700", text: "left ", emote: "🤩"}
		}

		const emotion = (() => {
			if (days_left < 0) {return 'dead';}
			else if (days_left < 15) {return 'sad';}
			else if (days_left < 42) {return 'scared';}
			else if (days_left < 100) {return 'happy';}
			else {return 'wow';}
		})();

		const days = document.createElement("div");
		const date = document.createElement("div");

		// if ()
		days.innerText = Math.abs(days_left) + " days " + status[emotion]["text"];
		// days.innerText = Math.abs(days_left) + " days " + status[emotion]["text"] + status[emotion]["emote"];
		days.style.color = status[emotion]["color"];

		date.innerText = bh_date;
		date.style.color = "#C5C5C5";
		date.style.fontSize = "0.6em";
		date.style.fontWeight = "400";

		document.getElementById('bh-date').replaceWith(days);
		document.getElementById('bh-date').appendChild(date);
	})
	.catch((err) => {
		throw err;
	})
