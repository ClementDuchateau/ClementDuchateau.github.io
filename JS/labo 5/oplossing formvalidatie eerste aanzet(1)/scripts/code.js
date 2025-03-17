const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	let valideerAlles = false;
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {

	valideerVoornaam();
	valideerAchternaam();
	valideerDatum();
	valideerEmail();
	valideerAtlKinderen()
	if (valideerAlles) {
		alert("Proficiat!")
	}

};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
		valideerAlles = false;
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
		valideerAlles = true;
	}
};

const valideerAchternaam = () => {
	let txtAchternaam = document.getElementById("txtAchternaam");
	let errAchternaam = document.getElementById("errAchternaam");
	let achternaam = txtAchternaam.value.trim();
	if (achternaam === ""){
		txtAchternaam.className="invalid";
		errAchternaam.innerHTML = "error: verplicht veld";
		valideerAlles = false;
	}else if(achternaam.length > 50){
		txtAchternaam.className="invalid";
		errAchternaam.innerHTML = "error: max 50 characters";
		valideerAlles = false;
	}else {
		txtAchternaam.className="";
		errAchternaam.innerHTML = "";
		valideerAlles = true;
	}
}
const valideerDatum = () => {
	let datum = document.getElementById("datum");
	let errDatum = document.getElementById("errDatum");
	if (datum.value === ""){
		datum.className="invalid";
		errDatum.innerHTML = "error: verplicht veld";
		valideerAlles = false;
	}else if(!/^\d{4}-\d{2}-\d{2}$/.test(datum.value)){
		datum.className="invalid";
		errDatum.innerHTML = "error: formaat is niet jjjj-mm-dd";
		valideerAlles = false;
	}else {
		datum.className="";
		errDatum.innerHTML = "";
		valideerAlles = true;
	}
}
const valideerEmail = () => {
	let email = document.getElementById("email");
	let errEmail = document.getElementById("errEmail");
	const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
	if (email.value.trim() === "") {
		email.className="invalid";
		errEmail.innerHTML = "verplicht veld";
		valideerAlles = false;
	} else if (!emailRegex.test(email.value.trim())) {
		email.className="invalid";
		errEmail.innerHTML = "error: geen geldig email adres";
		valideerAlles = false;
	} else {
		email.className = "";
		errEmail.innerHTML = "";
		valideerAlles = true;
	}
}
const valideerAtlKinderen = () => {
	let atlKinderen = document.getElementById("atlKinderen");
	let errAtlKinderen = document.getElementById("errAtlKinderen");
	if (atlKinderen.value.trim() < 0) {
		atlKinderen.className="invalid";
		errAtlKinderen.innerHTML = "error: is geen positief getal";
		valideerAlles = false;
	}else if(atlKinderen.value.trim() > 99){
		atlKinderen.className="invalid";
		errAtlKinderen.innerHTML = "error: is te vruchtbaar";
		valideerAlles = false;
	}else {
		atlKinderen.className="";
		errAtlKinderen.innerHTML = "";
		valideerAlles = true;
	}
}

window.addEventListener("load", setup);