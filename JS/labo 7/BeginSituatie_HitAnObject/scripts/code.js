let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let start = document.getElementById('btnStart');
    start.addEventListener('click', startGame );
};
const startGame = () => {

    let target = document.getElementById('target');
    global.score = 0;
    changeScore()
    target.src = global.IMAGE_PATH_PREFIX + Math.floor(1+Math.random() * (global.IMAGE_COUNT-1) ) + global.IMAGE_PATH_SUFFIX;
    target.style.left = Math.random() * 801 + 'px';
    target.style.top = Math.random() * 601 + 'px';
    target.classList.remove('hidden');
    target.addEventListener('click', changeTarget);
}
const changeTarget = () => {

    if(target.src.endsWith("images/0.png")){
        gameOver()
    }else{
        let x = Math.random() * 801;
        let y = Math.random() * 601;

        target.style.left = x + 'px';
        target.style.top = y + 'px';
        target.src = global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * global.IMAGE_COUNT ) + global.IMAGE_PATH_SUFFIX;
        if (target.src.endsWith("images/0.png")){
            global.timeoutId = setTimeout(() => {
                target.src = global.IMAGE_PATH_PREFIX + Math.floor(1+Math.random() * (global.IMAGE_COUNT-1) ) + global.IMAGE_PATH_SUFFIX
            }, 1000);
        }
        scoreUp()
    }

}
const gameOver = () => {
    window.alert('Do not press the bomb. Final score was ' + global.score);
    global.score = 0;
    changeScore()
    target.classList.add('hidden');
    clearTimeout(global.timeoutId);
}
const scoreUp = () => {
global.score++;
changeScore()
}
const changeScore = () => {
    let nieuweScore = document.createTextNode("Je score is "+ global.score);
    let score = document.getElementById('score');
    score.replaceChildren(nieuweScore);
}
window.addEventListener("load", setup);


