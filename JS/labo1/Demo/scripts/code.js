const setup = () => {

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);

let lblCursus = document.getElementById('lblCursus');
lblCursus.addEventListener("click", change);
}


const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value !== "") {
        alert("jouw naam is "+ txtName.value);
        console.log("jouw naam is "+ txtName.value);

        console.log(`jouw naam is ${txtName.value}`);
    }
    else
    {
        alert("gelieve jou naam in te vullen ");
    }

}


const change = () =>
{
    let lblCursus  = document.getElementById("lblCursus");
 lblCursus.className = "cursus";
}
window.addEventListener("load", setup);