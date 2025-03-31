const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	for (let i = 0; i < sliders.length; i++) {
		//sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	let btnSave = document.getElementById("btnSave");
	btnSave.addEventListener("click", save);
	let savedcolours = document.getElementById("savedcolour");
	let swatch = document.getElementById('swatch');


}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let lbl = document.getElementsByClassName("lbl");
	let value=sliders[0].value;
	//console.log("de waarde van de slider is momenteel : "+value);
	for (let i = 0; i < sliders.length; i++) {
		lbl[i].innerHTML = sliders[i].value;
	}

	return swatch.style.backgroundColor= "rgb("+sliders[0].value+", "+sliders[1].value+", "+sliders[2].value+")";

}
const save = (tosave) => {
	tosave = update();
	console.log(tosave);
	let saved = document.createElement('div');
	let btnDelete= document.createElement("input");
	btnDelete.setAttribute("type","button");
	btnDelete.setAttribute("value", "X");
	btnDelete.className = "btnDelete";
	saved.appendChild(btnDelete);
	saved.style.backgroundColor = tosave;
	saved.className = "colours";
	savedcolours.appendChild(saved);
	btnDelete.addEventListener("click", (e) => {
		saved.remove();
		e.stopPropagation();
	});
	saved.addEventListener("click", (e) => {
		swatch.style.backgroundColor = saved.style.backgroundColor;
		e.stopPropagation();
	})
}


// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
window.addEventListener("load", update);