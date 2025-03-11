const setup = () => {
    const img = document.getElementById('imgPhoto');
    img.addEventListener('mouseover', (e) => {
        let photo =document.getElementById('imgPhoto');
        photo.src = "./images/maxresdefault.jpg";
        photo.alt = "bee";
        photo.className = "SizePhoto";
        document.getElementById("txtText").innerHTML = "Bee"

    })
}
window.addEventListener("load", setup);