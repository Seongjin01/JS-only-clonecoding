const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
];

const chosenImage = [Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}.jpeg`;

document.body.appendChild(bgImage);