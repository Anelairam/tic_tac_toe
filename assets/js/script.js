var startButton = document.getElementById("str_btn");
var resetButton = document.getElementById("reset_btn");
var mainChoices = document.getElementById("main_choices_container");
var mainGame = document.getElementById("main_game_container");
var playerOneChoices = new Object;



document.addEventListener("DOMContentLoaded", function(){

    startGame();
    resetGame();
})









function startGame(){
    startButton.addEventListener("click", function(){
        //make an check if the player has made all his choices

        //Change the display propterty on choices and game contianer
        mainChoices.style.display = "none";
        mainGame.style.display = "flex";

    })
}

function resetGame(){
    resetButton.addEventListener("click", function(){
        //make an check if the player has made all his choices

        //Change the display propterty on choices and game contianer
        mainGame.style.display = "none";
        mainChoices.style.display = "flex";
        

    })
}