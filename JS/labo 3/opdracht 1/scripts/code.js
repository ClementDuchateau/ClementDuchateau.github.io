const setup = () => {
    const belangrijk = document.getElementsByClassName('belangrijk');
    for(i = 0; i < belangrijk.length; i++) {
        belangrijk[i].className += ' opvallend';
    }

}
window.addEventListener("load", setup);