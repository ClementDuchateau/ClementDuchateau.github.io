const setup = () => {
    let pElement = document.getElementById('txtOutput');
    let btn = document.getElementById('btn');
    addEventListener('click', (e) => {
        pElement.innerHTML = 'Welkom!';
    })

}
window.addEventListener("load", setup);