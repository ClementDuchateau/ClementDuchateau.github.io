const setup = () => {
    const splitInput = document.getElementById('splitInput');
    const split = document.getElementById('split');
    split.addEventListener('click', () => {
        console.log(splitInput.value.split('').join(' '));
    })
    const anInput = document.getElementById('anInput');
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        let tekst = anInput.value.toLowerCase();
        let tezoeken = "an";
        let atl = 0;
        let index = tekst.indexOf(tezoeken);
        while (index !== -1) {
            atl++;
            index = tekst.indexOf(tezoeken, index + 1);
        }
        console.log(tezoeken + " komt "+ atl + " keer voor.");    })
}
window.addEventListener("load", setup);