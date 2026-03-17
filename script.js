const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(e){

    if(e.code === "Space"){
        jump();
    }

});

function jump(){

    if(!dino.classList.contains("jump")){

        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        },500);

    }

}

let checkDead = setInterval(function(){

    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 90 && cactusLeft > 40 && dinoBottom < 40){

        alert("Game Over");

    }

},10);