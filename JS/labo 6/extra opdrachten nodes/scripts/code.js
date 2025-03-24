const setup = () => {
    let p = document.querySelectorAll('p')[0];
    let y =p.childNodes[0];
    y.remove();
    let z = document.createTextNode("Good Job!");
    p.appendChild(z);

}
window.addEventListener("load", setup);