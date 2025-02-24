const setup = () => {
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", veranderAchtergrond);

    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", veranderAchtergrond);

    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", veranderAchtergrond);

    let btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", veranderAchtergrond);

    let btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", veranderAchtergrond);

    let btn6 = document.getElementById("btn6");
    btn6.addEventListener("click", veranderAchtergrond);
}

const veranderAchtergrond = function () {
    if (this.classList.contains("blue")) {
        this.className = " btn";
    } else {
        this.className = "blue";
    }
}
window.addEventListener("load", setup);