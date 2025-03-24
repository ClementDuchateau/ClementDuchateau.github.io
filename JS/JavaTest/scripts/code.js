const setup = () => {
    let txtInput = document.getElementById("txtInput");
    input = txtInput.value;
    let dropDown = document.getElementById("dropDown");
    let note = document.getElementById("note");
    notetxt = note.value;
    let aantal = laad(input, notetxt);
    
    dropDown.addEventListener("click", (e) => {
        let met = document.getElementById("met");
        let zonder = document.getElementById("zonder");
        let urlmet = "with-egg.png";
        let urlzonder = "without-egg.png";
        let img = document.getElementById("img");
        if (met.selected){
            img.innerHTML = "<img src='"+urlmet+"'>";
            img.classList.remove("hidden");
        }else if(zonder.selected){
            img.innerHTML = "<img src='"+urlzonder+"'>";
            img.classList.remove("hidden");
        }
    })
    txtInput.addEventListener("input", laad);
}
const laad = (input, notetxt  ) => {
    let result = 0;
    let idx=input.indexOf(notetxt);
    while (idx!=-1) {
        result++;
        idx=input.indexOf(notetxt, idx+notetxt.length);
    }
    return result;
}
window.addEventListener("load", setup);