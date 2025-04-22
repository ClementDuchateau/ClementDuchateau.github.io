const setup = () => {
    // Create an object
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);

    let student1 = {
        firstName: "John",
        lastName: "Doe",
        eyeColor: "blue",
        age: new Date(2000, 1, 1)
    }
    console.log(student1.firstName);
    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
    tekst = JSON.stringify(students);
    console.log(tekst);
    tekstJS = JSON.parse(tekst);
    console.log("JSONparse "+ tekstJS[0].firstName);
}
window.addEventListener("load", setup);