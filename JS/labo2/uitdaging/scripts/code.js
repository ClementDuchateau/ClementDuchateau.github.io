const setup = () => {
    let btnRed = document.getElementById('btnRed');
    btnRed.addEventListener('click', makeRed);
    let btnDots = document.getElementById('btnDots');
    btnDots.addEventListener('click', makeDots);
}
const makeDots = () => {
    let ul = document.getElementById('ul');
    ul.classList.add('dots');
}
const makeRed = () => {
    let ul = document.getElementById('ul');
    ul.className = "makeRed";
}
window.addEventListener("load", setup);