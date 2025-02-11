const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
let btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', show);
}
const show = () => {
    let url = document.getElementById('url');

    if(url.value !== ""){
        
    }
}

window.addEventListener("load", setup);