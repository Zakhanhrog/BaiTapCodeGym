const imgchange = document.getElementById("image1");
const imagesource1 = ["11.jpg","21.jpg" ];

const imchange2 = document.getElementById("image2");
const imagesource2 = ["12.jpg","22.jpg" ];

const imgchange3 = document.getElementById("image3");
const imagesource3 = ["13.jpg","23.jpg" ];

const imgchange4 = document.getElementById("image4");
const imagesource4 = ["14.jpg","24.jpg" ];

let currentImage = 0;
imgchange.addEventListener("click", function() {
    currentImage = (currentImage + 1) % imagesource1.length;
    imgchange.src = imgchange[currentImage];
});