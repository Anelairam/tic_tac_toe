var startButton = document.getElementById("str_btn");
var resetButton = document.getElementById("reset_btn");
var mainChoices = document.getElementById("main_choices_container");
var mainGame = document.getElementById("main_game_container");
var playerOneHolder = document.getElementById("player_one_holder");
var gridBoxes = document.getElementsByClassName("player_box");
var triger = false;
var playerOneChoices = 
    { symbol: "none",
      color: "none",
      difficulty: "none"}



document.addEventListener("DOMContentLoaded", function(){

    playerChoose();
    startGame();

    for (let gridBox of gridBoxes){
        gridBox.addEventListener("click", function(){
            console.log(gridBox);
        })
    }    
    resetGame();
})




function playerCharacterHolder(){

    if (playerOneChoices.symbol == "fab fa-fly"){
        playerOneHolder.classList.add("fab");
        playerOneHolder.classList.add("fa-fly");
    }
    else if (playerOneChoices.symbol == "fas fa-paw"){
        playerOneHolder.classList.add("fas");
        playerOneHolder.classList.add("fa-paw");
    }
    else if (playerOneChoices.symbol == "fas fa-cloud"){
        playerOneHolder.classList.add("fas");
        playerOneHolder.classList.add("fa-cloud");
    }
    else{
        playerOneHolder.classList.add("fab");
        playerOneHolder.classList.add("fa-envira");
    }
    
    if (playerOneChoices.color == "color_box blue"){
        playerOneHolder.classList.add("blue_color");
    }
    else if (playerOneChoices.color == "color_box red"){
        playerOneHolder.classList.add("red_color");
    }
    else if (playerOneChoices.color == "color_box green"){
        playerOneHolder.classList.add("green_color");
    }
    else{
        playerOneHolder.classList.add("yellow_color");
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


function gamePlay(){
    console.log(gridBox[0].id);
}

function classEraser(){
    playerOneHolder.classList.remove("fas" , "fab" , "fa-fly", "fa-paw", "fa-cloud", "fa-envira", "blue_color", "red_color", "green_color", "yellow_color");
}

//Starts the game
function startGame(){
    startButton.addEventListener("click", function(){
        //Check if the player has made all his choices
        
            if (playerOneChoices.symbol != "none" && playerOneChoices.color != "none" && playerOneChoices.difficulty != "none"){
                //Change the display propterty on choices and game contianer
                playerCharacterHolder();
                //Make function for the cpu holder
                mainChoices.style.display = "none";
                mainGame.style.display = "flex";
                triger = true;
            }
            else{
                alert("There are missing characteristics from your symbol");
            }        
    })
}

//Resets the game
function resetGame(){
    resetButton.addEventListener("click", function(){
        //make an check if the player has made all his choices
        classEraser();
        //Change the display propterty on choices and game contianer
        playerOneChoices.symbol ="none";
        playerOneChoices.color = "none";
        playerOneChoices.difficulty = "none";
        mainGame.style.display = "none";
        mainChoices.style.display = "flex";
        

    })
}