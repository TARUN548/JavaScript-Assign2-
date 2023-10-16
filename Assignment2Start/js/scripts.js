document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");
// constants for query selector
const customNumberInput = document.getElementById("customNumber");
const pTag = document.getElementById("myStudentId");
const colorChangeButton = document.querySelector(".customColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imgElement = document.getElementById("imageDisplay");
// function to change bg color from user input and add student id
function changeCustomColor() {
    const customNumber = parseInt(customNumberInput.value); // Parse the input to an integer
    pTag.textContent = "200542633: " + customNumber;

    let bgColor;

    if (customNumber < 0 || customNumber > 100) {
        bgColor = "red";
    } else if (customNumber >= 0 && customNumber <= 20) {
        bgColor = "green";
    } else if (customNumber > 20 && customNumber <= 40) {
        bgColor = "blue";
    } else if (customNumber > 40 && customNumber <= 60) {
        bgColor = "orange";
    } else if (customNumber > 60 && customNumber <= 80) {
        bgColor = "purple";
    } else if (customNumber > 80 && customNumber <= 100) {
        bgColor = "yellow";
    }

    document.body.style.backgroundColor = bgColor;
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    customNumberInput.value = randomNum;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

    images.forEach(function (image) {
        const option = document.createElement("option");
        option.value = image;
        option.textContent = image;
        imageSelect.appendChild(option);
    });
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    imgElement.src = "./img/" + selectedImage; 
    imgElement.alt = selectedImage;
}

// event listeners for on click event of buttons and select
colorChangeButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);
// event listeners for on change event of select
addList();

});