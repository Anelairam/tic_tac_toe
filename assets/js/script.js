var startButton = document.getElementById("str_btn");
var resetButton = document.getElementById("reset_btn");
var mainChoices = document.getElementById("main_choices_container");
var mainGame = document.getElementById("main_game_container");
var icons = document.getElementsByTagName("i");
var colorBoxes = document.getElementsByClassName("color_box");
var levels = document.getElementsByClassName("level_box");
var playerOneHolder = document.getElementById("player_one_holder");
var cpuHolder = document.getElementById("cpu_holder");
var gridBoxes = document.getElementsByClassName("player_box");
var playerOneChoices = 
    { symbol: "none",
      color: "none",
      difficulty: "none"}

var cpuChoices = 
    { symbol: "none",
      color: "none",
      difficulty: "none"}



document.addEventListener("DOMContentLoaded", function(){

    playerChoose();
    startGame();

    for (let gridBox of gridBoxes){
        gridBox.addEventListener("click", function(){
            //Try to make it neet through function but got problem with the parameter
            //playerChoiceCharacter(gridBox);
            if (playerOneChoices.symbol == "fab fa-fly"){
                gridBox.firstElementChild.classList.add("fab");
                gridBox.firstElementChild.classList.add("fa-fly");
            }
            else if (playerOneChoices.symbol == "fas fa-paw"){
                gridBox.firstElementChild.classList.add("fas");
                gridBox.firstElementChild.classList.add("fa-paw");
            }
            else if (playerOneChoices.symbol == "fas fa-cloud"){
                gridBox.firstElementChild.classList.add("fas");
                gridBox.firstElementChild.classList.add("fa-cloud");
            }
            else{
                gridBox.firstElementChild.classList.add("fab");
                gridBox.firstElementChild.classList.add("fa-envira");
            }
            
            if (playerOneChoices.color == "color_box blue"){
                gridBox.firstElementChild.classList.add("blue_color");
            }
            else if (playerOneChoices.color == "color_box red"){
                gridBox.firstElementChild.classList.add("red_color");
            }
            else if (playerOneChoices.color == "color_box green"){
                gridBox.firstElementChild.classList.add("green_color");
            }
            else{
                gridBox.firstElementChild.classList.add("yellow_color");
            }

        }) 
    }
    resetGame();
})

function cpuCharChoose(){
    let num = Math.floor(Math.random() *4);
    if (num == 0){
        if ((playerOneChoices.symbol !== "fab fa-fly") && (playerOneChoices.color !== "color_box blue")){
            cpuHolder.classList.add("fab");
            cpuHolder.classList.add("fa-fly");
            cpuHolder.classList.add("blue_color");           
        }
    }
    else if (num == 1){
        if ((playerOneChoices.symbol !== "fas fa-paw") && (playerOneChoices.color !== "color_box red")){
            cpuHolder.classList.add("fas");
            cpuHolder.classList.add("fa-paw");
            cpuHolder.classList.add("red_color");
        }
    }
    else if (num == 2){
        if ((playerOneChoices.symbol !== "fas fa-cloud") && (playerOneChoices.color !== "color_box green")){
            cpuHolder.classList.add("fas");
            cpuHolder.classList.add("fa-cloud");
            cpuHolder.classList.add("green_color");
        }
    }
    else {
        if ((playerOneChoices.symbol !== "fab fa-envira") && (playerOneChoices.color !== "color_box yellow")){
            cpuHolder.classList.add("fab");
            cpuHolder.classList.add("fa-envira");   
            cpuHolder.classList.add("yellow_color");         
        }
    } 

}

/*function playerChoiceCharacter(x){
    if (playerOneChoices.symbol == "fab fa-fly"){
        gridBox.firstElementChild.classList.add("fab");
        gridBox.firstElementChild.classList.add("fa-fly");
    }
    else if (playerOneChoices.symbol == "fas fa-paw"){
        gridBox.firstElementChild.classList.add("fas");
        gridBox.firstElementChild.classList.add("fa-paw");
    }
    else if (playerOneChoices.symbol == "fas fa-cloud"){
        gridBox.firstElementChild.classList.add("fas");
        gridBox.firstElementChild.classList.add("fa-cloud");
    }
    else{
        gridBox.firstElementChild.classList.add("fab");
        gridBox.firstElementChild.classList.add("fa-envira");
    }
    
    if (playerOneChoices.color == "color_box blue"){
        gridBox.firstElementChild.classList.add("blue_color");
    }
    else if (playerOneChoices.color == "color_box red"){
        gridBox.firstElementChild.classList.add("red_color");
    }
    else if (playerOneChoices.color == "color_box green"){
        gridBox.firstElementChild.classList.add("green_color");
    }
    else{
        gridBox.firstElementChild.classList.add("yellow_color");
    }
}*/

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
    for (let gridBox of gridBoxes){
        gridBox.firstElementChild.classList.remove("fas" , "fab" , "fa-fly", "fa-paw", "fa-cloud", "fa-envira", "blue_color", "red_color", "green_color", "yellow_color");
    }
}

//Starts the game
function startGame(){
    startButton.addEventListener("click", function(){
        //Check if the player has made all his choices
        
            if (playerOneChoices.symbol != "none" && playerOneChoices.color != "none" && playerOneChoices.difficulty != "none"){
                //Change the display propterty on choices and game contianer
                playerCharacterHolder();
                cpuCharChoose();
                //Make function for the cpu holder
                mainChoices.style.display = "none";
                mainGame.style.display = "flex";
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