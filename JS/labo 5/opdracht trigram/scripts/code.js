const setup = () => {
    const send = document.getElementById('btnSend');
    send.addEventListener('click', toonTrigrams);

}
const toonTrigrams = () =>{
    let txtInput = document.getElementById('txtInput').value;
    let lstTrigrams = document.getElementById('lstTrigrams');
    let trigrams = getTrigrams(txtInput);
    
}

const getTrigrams = () => {
    let word = document.getElementById('txtInput').value;
    let result = [];
    for (let i = 0; i < word.length-2; i++) {
        result.push(word.slice(i, i + 3));
    }
    return result;
}
window.addEventListener("load", setup);