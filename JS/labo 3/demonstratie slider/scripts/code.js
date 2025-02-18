const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}


	// maak het blokje rood
	colorDemos[0].style.backgroundColor="red";
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let lbl = document.getElementsByClassName("lbl");
	let value=sliders[0].value;
	console.log("de waarde van de slider is momenteel : "+value);
	for (let i = 0; i < sliders.length; i++) {
		lbl[i].innerHTML = sliders[i].value;
	}
	let swatch = document.getElementById('swatch');
	swatch.style.backgroundColor= "rgb("+sliders[0].value+", "+sliders[1].value+", "+sliders[2].value+")";
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
window.addEventListener("load", update);