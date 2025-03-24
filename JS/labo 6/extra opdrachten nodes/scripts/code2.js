const setup = () => {
    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener('click', () => {
        let div = document.getElementById("myDIV");
        let p = document.createElement('p');
        let text = document.createTextNode("jippieee text!");
        p.appendChild(text);
        div.appendChild(p);
    })



}
window.addEventListener("load", setup);