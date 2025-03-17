const setup = () => {
    let steden = document.getElementById('steden');
    let lijst = [];
    let stop = false;
    while (!stop) {
        let input = prompt("Voeg een stad toe.");

        if (input == "stop") {
            stop = true;
        }else{
            lijst.push(input);
        }
        lijst.sort();


    }
    for (let i = 0; i < lijst.length; i++) {
        let option = document.createElement("option");
        option.textContent = lijst[i];
        steden.appendChild(option);
    }
}
window.addEventListener("load", setup);