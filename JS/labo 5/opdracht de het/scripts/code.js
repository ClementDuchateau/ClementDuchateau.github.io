const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx = result.indexOf(oud);

    while (idx !== -1) {
        let voor = result.slice(0, idx);
        let na = result.slice(idx + oud.length);
        result = voor + nieuw + na;
        idx = result.indexOf(oud, idx + nieuw.length);
    }

    return result;
};

const setup = () => {
    let btnSend = document.getElementById('btnSend');
    let inputTekst = document.getElementById('txtInput');
    let outputTekst = document.getElementById('txtOutput'); // Output veld toevoegen

    btnSend.addEventListener('click', () => {
        let nieuweTekst = vervangAlles(inputTekst.value, "de", "het");
        outputTekst.textContent = nieuweTekst; // Output bijwerken
    });
};

window.addEventListener("load", setup);