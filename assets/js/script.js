var startButton = document.getElementById("str_btn");
var resetButton = document.getElementById("reset_btn");
var mainChoices = document.getElementById("main_choices_container");
var mainGame = document.getElementById("main_game_container");
var playerOneChoices = 
    { symbol: "none",
      color: "none",
      difficulty: "none"}



document.addEventListener("DOMContentLoaded", function(){

    playerChoose();
    startGame();
    resetGame();
})


function playerChoose(){
    let icons = document.getElementsByTagName("i");
    let colorBoxes = document.getElementsByClassName("color_box");
    let levels = document.getElementsByClassName("level_box");


    //player chooses icon
    for (let icon of icons){
        icon.addEventListener("click", function(){
           playerOneChoices.symbol = this.className;        
        })
    }


    //player chooses color
    for (let colorBox of colorBoxes){
        colorBox.addEventListener("click", function(){
           playerOneChoices.color = this.className;      
        })
    }


    //player chooses difficulty
    for (let level of levels){
        level.addEventListener("click", function(){
           playerOneChoices.difficulty = this.className;      
        })
    }    
}






function startGame(){
    startButton.addEventListener("click", function(){
        //Check if the player has made all his choices
        for (let i = 0; i < 3; i++){
            if (playerOneChoices.symbol != "none" && playerOneChoices.color != "none" && playerOneChoices.difficulty != "none"){
                //Change the display propterty on choices and game contianer
                mainChoices.style.display = "none";
                mainGame.style.display = "flex";
            }
            else{
                alert("There are missing characteristics from your symbol");
                break;
            }
        }
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