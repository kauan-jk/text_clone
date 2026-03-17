const papa = document.getElementById("papa");
const cactus = document.getElementById("cactus");
const scoreText = document.getElementById("score");

// recorde
let highscore = localStorage.getItem("highScore") || 0;

let score = 0;
let speed = 6.5;
let isAlive = true;

// texto inicial
scoreText.innerText = "Score: 0 | Recorde: " + highscore;

/* PULO */
document.addEventListener("keydown", function(e){
    if(e.code === "Space"){
        jump();
    }
});

function jump(){
    if(!papa.classList.contains("jump")){
        papa.classList.add("jump");

        setTimeout(()=>{
            papa.classList.remove("jump");
        },500);
    }
}

/* MOVIMENTO DO CACTO */
let cactusPosition = 800;

function moveCactus(){
    if(!isAlive) return;

    cactusPosition -= speed;

    if(cactusPosition < -30){
        cactusPosition = 800;
        score++;

        if(score > highscore){
            highscore = score;
            localStorage.setItem("highScore", highscore);
        }

        scoreText.innerText = "Score: " + score + " | Recorde: " + highscore;

        speed += 0.5;
    }

    cactus.style.left = cactusPosition + "px";

    requestAnimationFrame(moveCactus);
}

moveCactus();

/* COLISÃO */
setInterval(()=>{

    if(!isAlive) return;

    const papaRect = papa.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if(
        papaRect.right > cactusRect.left &&
        papaRect.left < cactusRect.right &&
        papaRect.bottom > cactusRect.top
    ){
        isAlive = false;

        setTimeout(()=>{
            alert("💀 Game Over! Score: " + score);
            location.reload();
        },200);
    }

},10);
