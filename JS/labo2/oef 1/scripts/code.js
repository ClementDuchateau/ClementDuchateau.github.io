const setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5", "familielid 6"];
    console.log(familie.length);
    for(let i = 0; i < familie.length; i=i+2) {
        console.log(familie[i]);

    }

    voegNaamToe(familie);

    console.log(familie.join(" - "));
}
const voegNaamToe = (leden) => {
    let naam = prompt("Voeg een naam toe");
    leden.push(naam);
    for(let i = 0; i < leden.length; i++) {
        console.log(leden[i]);
    }
}
window.addEventListener("load", setup);