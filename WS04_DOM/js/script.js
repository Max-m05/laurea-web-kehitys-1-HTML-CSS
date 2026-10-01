const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");

const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Yksi rotu on esim: Jack Russelin terrieri";
});

// Tehtävä 2 //
const animalContent = document.querySelector("#animalContent");
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Koira kuuluu nisäkkäiden luokkaan.";

const dailyanimalImage = document.createElement("img");
dailyanimalImage.src = "img/ws04_koira.jpeg";
dailyanimalImage.alt = "Koira";

animalContent.append(animalHeading, animalParagraph, dailyanimalImage);

const hideAnimalButton = document.querySelector("#hideAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

const showAnimalButton = document.querySelector("#showAnimalButton");

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});

// Tehtävä 3 //
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage2 = document.querySelector("#animalImage2");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "dog") {

        animalName.textContent = "Koira";
        animalImage.src = "img/ws04_jackrussel.jpg";
        animalImage.alt = "Koira2";
        animalDescription.textContent =
            "Kuva Jack Russelin Terrieristä.";

    } else if (selectedAnimal === "cat") {

        animalName.textContent = "Kissa";
        animalImage.src = "img/ws04_cat.jpg";
        animalImage.alt = "Kissa";
        animalDescription.textContent =
            "Kissa on myös hyvä lemmikkieläin.";

    } else if (selectedAnimal === "hamster") {

        animalName.textContent = "Hamsteri";
        animalImage.src = "img/ws04_hamster.jpg";
        animalImage.alt = "Hamsteri";
        animalDescription.textContent =
            "Hamsterit ovat pienikokoisia jyrsijöitä ja mahdollisia lemmikkejä.";

    } else if (selectedAnimal === "parrot") {

        animalName.textContent = "Papukaija";
        animalImage.src = "img/ws04_parrot.jpg";
        animalImage.alt = "Papukaija";
        animalDescription.textContent =
            "Papukaija on lintu ja hieman eksoottisempi lemmikki.";

    }
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

// Tehtävä 4 //
const animalForm = document.querySelector("#animalForm");
const observationAnimalInput =
    document.querySelector("#observationAnimal");
const observationLocationInput =
    document.querySelector("#observationLocation");
const observationDateInput =
    document.querySelector("#observationDate");
const observationTableBody =
    document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const animal = observationAnimalInput.value.trim();
    const location = observationLocationInput.value.trim();
    const date = observationDateInput.value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    animalCell.textContent = animal;
    locationCell.textContent = location;
    dateCell.textContent = date;

    newRow.append(animalCell, locationCell, dateCell);

    observationTableBody.append(newRow);

    animalForm.reset();
});

