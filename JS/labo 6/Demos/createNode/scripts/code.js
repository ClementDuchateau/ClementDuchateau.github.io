const setup = () => {
    let element = document.createElement('p');
    element.setAttribute("class", color);
    element.setAttribute("id", txtPar);

    let textNode = document.createTextNode("Hello World!");
    element.appendChild(textNode);
    document.querySelector("#myDIV").appendChild(element);
}
window.addEventListener("load", setup);