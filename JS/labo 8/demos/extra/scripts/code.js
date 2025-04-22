const setup = () => {
    let evenement = {
        naam: "Codeer workshop JavaScript",
        datum: new Date(2025, 3, 15),
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);
}
const toonEvenementInfo = (e) => {

    console.log("Evenement: "+ e.naam);
    console.log("Datum: " + e.datum.toDateString());
    console.log("Locatie: "+ e.locatie);
    console.log("deelnemers: "+ e.deelnemers.join(", "));
    let day = new Date();
    console.log("Dagen tot evenement: " + Math.ceil((e.datum - day)/86400000));
}
window.addEventListener("load", setup);