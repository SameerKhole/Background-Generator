var cssText = document.querySelector('h3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('random');

window.onload = setInterval(ChangeColor,1000);
window.onload = setGradient();
randomBtn.addEventListener('click',ChangeColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function colorGenerator(){
	var color = "rgb(";
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	color += r + "," + g + "," + b + ")";
	return color;
}

function hexColorGenerator(){
	return Math.random().toString(16).slice(2, 8)
}

function ChangeColor(){
	var c1 = colorGenerator();
	var c2 = colorGenerator();
	var hexC1 = "#"+hexColorGenerator();
	var hexC2 = "#"+hexColorGenerator();
	body.style.background = "linear-gradient(to right, " + hexC1 + ", " + hexC2 + ")";
	cssText.textContent = body.style.background + ";";
	color1.value = hexC1;
	color2.value = hexC2;
}

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssText.textContent = body.style.background + ";";
}