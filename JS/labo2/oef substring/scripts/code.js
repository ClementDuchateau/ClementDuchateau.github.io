const setup = () => {
    let sendButton = document.getElementById('SendButton');
    sendButton.addEventListener("click", knip);
}
const knip = () => {
    let txtInput = document.getElementById('txtInput');
    txtOutput.innerHTML = txtInput.value.substring(beginNr.value, amountOfNrs.value);
}
window.addEventListener("load", setup);