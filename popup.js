document.addEventListener("DOMContentLoaded", function () {

	// EXTENSION

	document.querySelector("#enable").addEventListener("click", function () {
		document.getElementById("enable").hidden = true;
		document.getElementById("disable").hidden = false;
	});

	document.querySelector("#disable").addEventListener("click", function () {
		document.getElementById("enable").hidden = false;
		document.getElementById("disable").hidden = true;
	});

	// EMOTES

	document.querySelector("#enable_emotes").addEventListener("click", function () {
		document.getElementById("enable_emotes").hidden = true;
		document.getElementById("disable_emotes").hidden = false;
	});

	document.querySelector("#disable_emotes").addEventListener("click", function () {
		document.getElementById("enable_emotes").hidden = false;
		document.getElementById("disable_emotes").hidden = true;
	});

	// ABOUT

	document.querySelector("#about").addEventListener("click", function () {
		window.open("https://github.com/louisnfr/42-better-blackhole");
	});
});
