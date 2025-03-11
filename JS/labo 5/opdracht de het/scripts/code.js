const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = document.getElementById('txtInput');
    let idx=result.indexOf(oud);
    while (idx!=-1){
        let voor = result.slice(0, idx);
        let na = result.slice(idx+oud.length, result.length);
        result = voor+nieuw+na;
        idx= result.indexOf(oud, idx+nieuw.length);
    }
    return result;
}

const setup = () => {
    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener('click', vervangAlles);
    let inputTekst = document.getElementById('txtInput');
    let outputTekst = vervangAlles(inputTekst, "de", "het");
    console.log(outputTekst);
}
window.addEventListener("load", setup);