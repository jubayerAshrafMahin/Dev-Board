
const themeBtn = document.getElementById("theme-btn");
const body = document.getElementById("body");
let prevRandom = -1;
const colors = ["#552143", "#00ee23", "skyblue", "blue", "#00aaaa", "#00ee00", "#aaff00", "#f56900", "#9e9e9e", "#a0a0a0"];

themeBtn.addEventListener("click", function(){

    console.log("Theme button clicked");
    let random;
    do{
        random = Math.floor(Math.random() * 10);
    }while(random===prevRandom);

    body.style.backgroundColor=colors[random];
    prevRandom=random;

})