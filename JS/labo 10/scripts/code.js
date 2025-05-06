let global={
     G : "www.google.com/search?q=",
    Y: "www.youtube.com/results?search_query=",
    X: "x.com/hashtag/",
    I: "www.instagram.com/explore/tags/",
    HTTPS_PREFIX: "https://",
    VALID_LETTERS: ["g","y","x","i"]

}

const setup = () => {
let btnSearch = document.getElementById("btnsearch");
btnSearch.addEventListener("click", search);
}

const search = () => {
    let txtInput = document.getElementById("txtInputBalk");
    let input = txtInput.value;
    let regex = input.match(`\/[${global.VALID_LETTERS}]{1} [a-z]*`);
    let cmdletter = input.substring(1,2);
    let zoekwoord = input.substring(3);
    if (regex != null) {
        if(cmdletter == "g") {
            window.open(global.HTTPS_PREFIX + global.G + zoekwoord , "_blank");
        }else if(cmdletter =="y"){
            window.open(global.HTTPS_PREFIX + global.Y + zoekwoord , "_blank");
        }else if(cmdletter =="x"){
            window.open(global.HTTPS_PREFIX + global.X + zoekwoord , "_blank");
        }else if(cmdletter =="i"){
            window.open(global.HTTPS_PREFIX + global.I + zoekwoord , "_blank");
        }

    }else{
        alert("Invalid command");
    }
}
const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div", "col4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div", "card-Body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cardText =createElementWithClassNameAndText("p", "card-text", commandoSuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);

}

const createElement = (element) => {
    let e = document.createElement(element);
    return e;
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className,text ) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    let t = document.createTextNode(text);
    return e;
}

window.addEventListener("load", setup);