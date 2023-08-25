var map = "ascent"
var maps = ["ascent", "bind", "breeze", "fracture", "haven", "icebox", "lotus", "pearl", "split"]

function openPage() {
	for (let i = 0; i < maps.length; i++) {
		document.getElementById(maps[i]).style.display = "none";
	}
	map = document.getElementById("maps").value;
	document.getElementById(map).style.display = "inherit"
}