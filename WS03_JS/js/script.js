function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const table = `
        <table border="1">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const container = document.querySelector("#table-container");
    container.innerHTML = table;
}

// Harjoitus 2

const headers = document.querySelectorAll("h1");
const h1Harjoitus1 = headers[0];
const h1Harjoitus2 = headers[1];

h1Harjoitus2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse");
});

h1Harjoitus1.addEventListener("click", function() {
    h1Harjoitus1.style.color = "red";
    h1Harjoitus1.innerHTML = "You clicked me!";
});


// Harjoitus 3 ja 4
const feedbackForm = document.getElementById("feedbackForm");
const feedback = document.getElementById("feedback");
const charcount = document.getElementById("charcount");
const statusElement = document.getElementById("status");
const preview = document.getElementById("preview");

feedback.addEventListener("focus", function() {
    statusElement.textContent = "Kirjoita palautteesi tähän.";
    feedback.style.backgroundColor = "#fffde7";
});

feedback.addEventListener("blur", function() {
    statusElement.textContent = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function() {
    const text = feedback.value;
    charcount.textContent = text.length + "/200";
    preview.textContent = text;
});

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = feedback.value;

    if (text.length < 10 || text.length > 200) {
        statusElement.textContent = "Palaute pitää olla 10-200 merkkiä.";
    } else {
        statusElement.textContent = "Thank you for your feedback!";
    }
});

// Harjoitus 5
document.addEventListener("keydown", function(event) {
    console.log(event);

    const keyinfo = document.getElementById("keyinfo");
    const keybox = document.getElementById("keybox");

    keyinfo.textContent = "Näppäin: " + event.key + " | Koodi: " + event.code;

    keybox.textContent = event.key;
    keybox.style.fontSize = "3em";
});
