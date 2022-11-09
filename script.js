var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("btnRandom");
css.textContent = "left color hex: "+color1.value+" | right color hex: "+color2.value;

function colorChange(){
	body.style.background = "linear-gradient(to right," + color1.value+ ","+color2.value+")";
	showHexColor(color1.value,color2.value);
}

function showHexColor(color1,color2) {
	css.textContent = "left color hex: "+color1+" | right color hex: "+color2; //writes in the h3 element the HEX color of the input
}

function randomColors() {
	color1.value = "#"+Math.floor(Math.random() * 16777215).toString(16); //generates a random number and coverts it into Hex
	color2.value = "#"+Math.floor(Math.random() * 16777215).toString(16);
	body.style.background = "linear-gradient(to right," + color1.value+ ","+color2.value+")";
	showHexColor(color1.value,color2.value);
}

color1.addEventListener("input",colorChange);

color2.addEventListener("input", colorChange);

randomBtn.addEventListener("click", randomColors);
