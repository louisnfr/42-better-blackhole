document.addEventListener("DOMContentLoaded", function () {

	document.querySelector("#about").addEventListener("click", function () {
		window.open("https://github.com/louisnfr/42-better-blackhole");
	});

	document.querySelector("#enable").addEventListener("click", function () {
		toggleEnabled(true, settingsSavedReloadMessage);
	});

	document.querySelector("#disable").addEventListener("click", function () {
		toggle();
	});

	function toggle()
	{
		var t = document.getElementById("disable");
		t.hidden;
	}
});
