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

const animalImage = document.createElement("img");
animalImage.src = "img/ws04_koira.jpeg";
animalImage.alt = "Koira";

animalContent.append(animalHeading, animalParagraph, animalImage);

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
});

