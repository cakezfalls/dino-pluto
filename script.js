const pluto = document.getElementById("pluto");
const cactus = document.getElementById("cactus");
let score = document.querySelector("score");
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
};

window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (pluto.classList != "jump") {
        pluto.classList.add("jump")
    }
    setTimeout(function() {
        pluto.classList.remove("jump")

    }, 300)
}

let isAlive = setInterval(function() {
    let plutoTop = parseInt(window.getComputedStyle(pluto).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && plutoTop >= 140)
        document.getElementById('lose').style.display = 'block';



}, 10)