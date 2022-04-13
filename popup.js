document.addEventListener("DOMContentLoaded", function () {
	chrome.storage.sync.get({ enabled: true }, function (storage) {
		toggleEnabledUI(storage.enabled);
	});

	chrome.storage.sync.get({ emotes: true }, function (storage) {
		toggleEmotesUI(storage.emotes);
	});

	{	// EVENTS ON CLICK
		document.querySelector("#about").addEventListener("click", function () {
			window.open("https://github.com/louisnfr/42-better-blackhole");
		});

		document.querySelector("#hide").addEventListener("click", function () {
			toggleEmotes(false, EmotesMessage);
		}, false);

		document.querySelector("#show").addEventListener("click", function () {
			toggleEmotes(true, EmotesMessage);
		}, false);

		document.querySelector("#disable").addEventListener("click", function () {
		toggleEnabled(false, ReloadMessage);
		}, false);

		document.querySelector("#enable").addEventListener("click", function () {
			toggleEnabled(true, ReloadMessage);
		}, false);
	}

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

	function toggleEmotes(enabled, callback) {
		chrome.storage.sync.set(
		{
			emotes: enabled
		},
		function () {
			toggleEmotesUI(enabled);
			if (callback) callback(enabled);
		}
		);
	}

	function toggleEnabledUI(enabled) {
		document.querySelector("#enable").classList.toggle("hide", enabled);
		document.querySelector("#disable").classList.toggle("hide", !enabled);
	}

	function toggleEmotesUI(enabled) {
		document.querySelector("#show").classList.toggle("hide", enabled);
		document.querySelector("#hide").classList.toggle("hide", !enabled);
	}

	function ReloadMessage(enabled) {
		setStatusMessage(
			`${enabled ? "Extension enabled" : "Extension disabled"}. Reload to see changes.`,
			"status"
		);
	}

	function EmotesMessage(enabled) {
		setStatusMessage(
			`${enabled ? "Shown emotes" : "Hidden emotes"}. Reload to see changes.`,
			"status_em"
		);
	}

	function setStatusMessage(str, status) {
		const status_element = document.querySelector("#" + status);
		status_element.classList.toggle("hide", false);
		status_element.innerText = str;
	}
});
