const images = ["0.jpg", "1.jpg", "2.jpg"]

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);;
    }  

const choosenImg = images[getRandom(0,2)];
const bgImage = document.createElement("img");

bgImage.src = `src/img/${choosenImg}`;
document.body.appendChild(bgImage)
