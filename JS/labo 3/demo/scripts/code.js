const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

}
// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}
const withoutBullets = () => {

    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++){
        /*listItems[i].styles.listStyleType = "none";
        listItems[i].styles.backgroundColor = "red";
        listItems[i].className = "listItemsStyleNone colorRed";*/
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
    }
}
const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++){
        /*listItems[i].styles.listStyleType = "disc";
        listItems[i].styles.backgroundColor = "white";
        listItems[i].className = "listItemsStyleDisc colorWhite"*/
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.remove("colorRed");
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");

    }
}
// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent")
        .textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML")
        .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}
window.addEventListener("load", setup);