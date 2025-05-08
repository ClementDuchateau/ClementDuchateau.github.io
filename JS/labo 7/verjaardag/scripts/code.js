const setup = () => {
    let container = document.getElementById('container');
    let cube = document.getElementById('cube');
    cube.style.position = "absolute";
    cube.style.top = "0px";

    let i = 0;

    const animate = () => {
        if (i < container.offsetHeight) {
            cube.style.top = (parseInt(cube.style.top, 10) || 0) + 1 + "px";
            i++;
            requestAnimationFrame(animate); // Laat de animatie vloeiend lopen
        }
    };

    animate(); // Start de animatie
};
window.addEventListener("load", setup);
