const setup = () => {

    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    console.log(start.getDay());
    console.log(start.getMonth()+1);
    console.log(start.getFullYear());

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());
    let datum = new Date(2025, 0, 1);
    console.log(datum);
    let event = new Date();
    console.log("toString" + event.toString());
    console.log("toISOString " + event.toISOString());

    console.log(datum.toDateString());
    console.log(datum.toTimeString());

    let bday = new Date(2004, 1, 20);
    console.log((event - bday)/86400000);


}
window.addEventListener("load", setup);