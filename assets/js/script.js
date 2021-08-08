alert("hello people");

var mainChoices = document.getElementById("main_choices_container");
var mainGame = document.getElementById("main_game_container");
var playerOneChoices = new Object;



document.addEventListener("DOMContentLoaded", function(){

    let start = document.getElementById("str_btn");
    start.addEventListener("click",function(){
        //Add the startGame function
        console.log("hello");
    })
})









function startGame(){
    let startButton = document.getElementById("str_btn");

    startButton.addEventListener("click", function(){
        //make an check if the player has made all his choices

        //Change the display propterty on choices and game contianer
        mainChoices.style.display = "none";
        mainGame.style.display = "flex";

    })
}