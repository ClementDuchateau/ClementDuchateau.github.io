

const storeSliderValues = () => {
    let rgb = {};

    rgb.red = parseInt(document.getElementById("sldRed").value);
    rgb.green = parseInt(document.getElementById("sldGreen").value);
    rgb.blue = parseInt(document.getElementById("sldBlue").value);
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("Vives.be.colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {
    let rgb;
    let jsonText = localStorage.getItem("Vives.be.colorpicker.sliders");
    if (jsonText === undefined) {
        rgb = {
            red: 0,
            green: 0,
            blue: 0

        };
    } else{
        rgb = JSON.parse(jsonText);
    }

    document.getElementById("sldRed").value = rgb.red;
    document.getElementById("sldGreen").value = rgb.green;
    document.getElementById("sldBlue").value = rgb.blue;

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    
};

const restoreSwatches = () => {

};
