const setup = () => {
    prijzen = document.getElementsByClassName("prijs");
    aantallen = document.getElementsByClassName("aantal");
    btws = document.getElementsByClassName("btw");
    subtotalen = document.getElementsByClassName("subtotaal");
    totaal = document.getElementById("totaal");
    herbereken = document.getElementById("herbereken");
    herbereken.addEventListener("click", bereken);

}
const bereken = () => {
    let totaalBedrag = 0;

    for (let i = 0; i < prijzen.length; i++){
        let prijs = parseInt(prijzen[i].innerHTML, 10);
        let btw = (parseInt(btws[i].innerHTML, 10))/100+1;
        let aantal = parseInt(aantallen[i].value);
        let berekend = prijs * aantal * btw;
        console.log(berekend);
        subtotalen[i].innerHTML = berekend.toFixed(2) + " Eur";
    }
    for (let i = 0; i < subtotalen.length; i++){
        let subtotal = parseFloat(subtotalen[i].innerHTML);
        totaalBedrag += subtotal;
    }
    totaal.innerHTML = totaalBedrag.toFixed(2) + " Eur";

}
window.addEventListener("load", setup);