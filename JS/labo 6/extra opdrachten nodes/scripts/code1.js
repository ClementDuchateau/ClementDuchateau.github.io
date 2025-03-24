const setup = () => {
    let list = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("class", "listitem");
    }
    let img = document.createElement("img");
    let body = document.querySelector("body");
    img.setAttribute("src", "images/maxresdefault.jpg");
    img.setAttribute("alt", "bee")
    body.appendChild(img);
}
window.addEventListener("load", setup);