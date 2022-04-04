
// tuto popup
// https://www.section.io/engineering-education/how-to-build-chrome-extension/

document.addEventListener("DOMContentLoaded", function () {

	// EXTENSION

	document.querySelector("#enable_ext").addEventListener("click", function () {
		toggleEnabled(true, settingsSavedReloadMessage);
	}, false);

	document.querySelector("#disable_ext").addEventListener("click", function () {
		toggleEnabled(false, settingsSavedReloadMessage);
	}, false);

	// EMOTES

	// document.querySelector("#enable_emotes").addEventListener("click", function () {
	// 	document.getElementById("enable_emotes").hidden = true;
	// 	document.getElementById("disable_emotes").hidden = false;
	// });

	// document.querySelector("#disable_emotes").addEventListener("click", function () {
	// 	document.getElementById("enable_emotes").hidden = false;
	// 	document.getElementById("disable_emotes").hidden = true;
	// });

	// ABOUT

	document.querySelector("#about").addEventListener("click", function () {
		window.open("https://github.com/louisnfr/42-better-blackhole");
	});

	function toggleEnabled(enabled, callback) {
		chrome.storage.sync.set(
		{
			enabled: enabled
		},
		function () {
			toggleEnabledUI(enabled);
			if (callback) callback(enabled);
		}
		);
	}

	function toggleEnabledUI(enabled) {
		document.querySelector("#enable_ext").classList.toggle("hide", enabled);
		document.querySelector("#disable_ext").classList.toggle("hide", !enabled);
	}

	function settingsSavedReloadMessage(enabled) {
		setStatusMessage(
		  `${enabled ? "Enabled" : "Disabled"}. Reload page to see changes`
		);
	  }

	  function setStatusMessage(str) {
		const status_element = document.querySelector("#status_ext");
		status_element.classList.toggle("hide", false);
		status_element.innerText = str;
	  }

}, false);
