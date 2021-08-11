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
      color: "none"}



document.addEventListener("DOMContentLoaded", function(){

    playerChoose();
    startGame();

    var count = 0;
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
            count ++;

            if (count <5){
                setTimeout(cpuMove, 1500);
            }
            gameResult();           
        }) 
    }
    resetGame();
})

function gameResult(){
    //win combinations
    /*  0-1-2   0-3-6   0-4-8
        3-4-5   1-4-7   2-4-6
        6-7-8   2-5-8
    */
   if ((gridBoxes[0].firstElementChild.className == gridBoxes[1].firstElementChild.className) && (gridBoxes[1].firstElementChild.className == gridBoxes[2].firstElementChild.className)){
       console.log("correct");
   }
}

function cpuMove(){
    let move = Math.floor(Math.random() *9);

    if (gridBoxes[move].firstElementChild.className == "grid_icon"){
        if (cpuChoices.symbol == "fab fa-fly"){
            gridBoxes[move].firstElementChild.classList.add("fab");
            gridBoxes[move].firstElementChild.classList.add("fa-fly");
        }
        else if (cpuChoices.symbol == "fas fa-paw"){
            gridBoxes[move].firstElementChild.classList.add("fas");
            gridBoxes[move].firstElementChild.classList.add("fa-paw");
        }
        else if (cpuChoices.symbol == "fas fa-cloud"){
            gridBoxes[move].firstElementChild.classList.add("fas");
            gridBoxes[move].firstElementChild.classList.add("fa-cloud");
        }
        else{
            gridBoxes[move].firstElementChild.classList.add("fab");
            gridBoxes[move].firstElementChild.classList.add("fa-envira");
        }
        
        if (cpuChoices.color == "color_box blue"){
            gridBoxes[move].firstElementChild.classList.add("blue_color");
        }
        else if (cpuChoices.color == "color_box red"){
            gridBoxes[move].firstElementChild.classList.add("red_color");
        }
        else if (cpuChoices.color == "color_box green"){
            gridBoxes[move].firstElementChild.classList.add("green_color");
        }
        else{
            gridBoxes[move].firstElementChild.classList.add("yellow_color");
        }
    }
    else{
        cpuMove();
    }
}

function cpuCharChoose(){
    let num = Math.floor(Math.random() *4);
    if (num == 0){
        if (playerOneChoices.symbol !== "fab fa-fly"){
            cpuHolder.classList.add("fab");
            cpuHolder.classList.add("fa-fly");
            cpuChoices.symbol = "fab fa-fly";

            if (playerOneChoices.color !== "color_box blue"){
                cpuHolder.classList.add("blue_color"); 
                cpuChoices.color = "blue_color";
            }   
            else if (playerOneChoices.color !== "color_box red"){
                cpuHolder.classList.add("red_color"); 
                cpuChoices.color = "red_color";
            } 
            else if (playerOneChoices.color !== "color_box green"){
                cpuHolder.classList.add("green_color"); 
                cpuChoices.color = "green_color";
            } 
            else (playerOneChoices.color !== "color_box yellow")
                cpuHolder.classList.add("yellow_color"); 
                cpuChoices.color = "yellow_color";
                 
        }
    }
    else if (num == 1){
        if (playerOneChoices.symbol !== "fas fa-paw"){
            cpuHolder.classList.add("fas");
            cpuHolder.classList.add("fa-paw");
            cpuChoices.symbol = "fas fa-paw";
            
            if (playerOneChoices.color !== "color_box blue"){
                cpuHolder.classList.add("blue_color");
                cpuChoices.color = "blue_color";
            }   
            else if (playerOneChoices.color !== "color_box red"){
                cpuHolder.classList.add("red_color");
                cpuChoices.color = "red_color"; 
            } 
            else if (playerOneChoices.color !== "color_box green"){
                cpuHolder.classList.add("green_color");
                cpuChoices.color = "green_color"; 
            } 
            else (playerOneChoices.color !== "color_box yellow")
                cpuHolder.classList.add("yellow_color");
                cpuChoices.color = "yellow_color";
                 
        }
    }
    else if (num == 2){
        if (playerOneChoices.symbol !== "fas fa-cloud"){
            cpuHolder.classList.add("fas");
            cpuHolder.classList.add("fa-cloud");
            cpuChoices.symbol = "fas fa-cloud";
            
            if (playerOneChoices.color !== "color_box blue"){
                cpuHolder.classList.add("blue_color"); 
                cpuChoices.color = "blue_color";
            }   
            else if (playerOneChoices.color !== "color_box red"){
                cpuHolder.classList.add("red_color"); 
                cpuChoices.color = "red_color";
            } 
            else if (playerOneChoices.color !== "color_box green"){
                cpuHolder.classList.add("green_color"); 
                cpuChoices.color = "green_color";
            } 
            else (playerOneChoices.color !== "color_box yellow")
                cpuHolder.classList.add("yellow_color"); 
                cpuChoices.color = "yellow_color";
                 
        }
    }
    else {
        if (playerOneChoices.symbol !== "fab fa-envira"){
            cpuHolder.classList.add("fab");
            cpuHolder.classList.add("fa-envira");   
            cpuChoices.symbol = "fab fa-envira";
            
            if (playerOneChoices.color !== "color_box blue"){
                cpuHolder.classList.add("blue_color"); 
                cpuChoices.color = "blue_color";
            }   
            else if (playerOneChoices.color !== "color_box red"){
                cpuHolder.classList.add("red_color"); 
                cpuChoices.color = "red_color";
            } 
            else if (playerOneChoices.color !== "color_box green"){
                cpuHolder.classList.add("green_color"); 
                cpuChoices.color = "green_color";
            } 
            else (playerOneChoices.color !== "color_box yellow")
                cpuHolder.classList.add("yellow_color"); 
                cpuChoices.color = "yellow_color";    
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

function classEraser(){
    playerOneHolder.classList.remove("fas" , "fab" , "fa-fly", "fa-paw", "fa-cloud", "fa-envira", "blue_color", "red_color", "green_color", "yellow_color");
    cpuHolder.classList.remove("fas" , "fab" , "fa-fly", "fa-paw", "fa-cloud", "fa-envira", "blue_color", "red_color", "green_color", "yellow_color");
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
        location.reload();
       /* //make an check if the player has made all his choices
        classEraser();
        //Change the display propterty on choices and game contianer
        playerOneChoices.symbol ="none";
        playerOneChoices.color = "none";
        playerOneChoices.difficulty = "none";
        mainGame.style.display = "none";
        mainChoices.style.display = "flex";
        */

    })
}