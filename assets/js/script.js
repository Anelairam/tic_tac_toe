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
   // playerCharacterHolder();
    resetGame();
})


function playerCharacterHolder(){
    let playerOneHolder = document.getElementById("player_one_holder");

    if (playerOneChoices.symbol == "fab fa-fly"){
        playerOneHolder.classList.add("fab fa-fly");
    }
    else if (playerOneChoices.symbol == "fas fa-paw"){
        playerOneHolder.classList.add("fab fa-fly");
    }
    else if (playerOneChoices.symbol == "fas fa-cloud"){
        playerOneHolder.classList.add("fas fa-cloud");
    }
    else{
        playerOneHolder.classList.add("fab fa-envira");
    }
}

//Saves the player's choices
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

//Starts the game
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

//Resets the game
function resetGame(){
    resetButton.addEventListener("click", function(){
        //make an check if the player has made all his choices

        //Change the display propterty on choices and game contianer
        playerOneChoices.symbol ="none";
        playerOneChoices.color = "none";
        playerOneChoices.difficulty = "none";
        mainGame.style.display = "none";
        mainChoices.style.display = "flex";
        

    })
}