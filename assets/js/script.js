
var startButton = document.getElementById("str_btn");
var resetButton = document.getElementById("rst_btn");
var mainChoices = document.getElementById("main_choices_container");
var mainGame = document.getElementById("main_game_container");
var icons = document.getElementsByTagName("i");
var colorBoxes = document.getElementsByClassName("color_box");
var levels = document.getElementsByClassName("level_box");
var playerOneHolder = document.getElementById("player_one_holder");
var cpuHolder = document.getElementById("cpu_holder");
var scorePlayOne = document.getElementById("score_p1");
var scorePlayTwo = document.getElementById("score_p2");
var gridBoxes = document.getElementsByClassName("player_box");
var hiddenChars = document.getElementsByClassName("check_holder");
var playerOneChoices = 
    { symbol: "none",
      color: "none"}

var cpuChoices = 
    { symbol: "none",
      color: "none"}

var myAudio = new Audio();
    myAudio.src = "../assets/audio/Kevin MacLeod Quirky Dog.mp3";
    myAudio.volume = 0.1;
    myAudio.loop = true;
var musicBtn = document.getElementById("music_btn");
var musicOn = false;

var mySound = new Audio();
    mySound.src = "../assets/audio/p1.mp3";
    mySound.volume = 0.3;
var yourSound = new Audio();
    yourSound.src = "../assets/audio/p2.mp3";
    yourSound.volume = 0.3;
var noSound = document.getElementById("no_sound");
var soundOn = false;



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
            gridBox.firstElementChild.nextElementSibling.innerHTML = "x";
            mySound.play();
            count ++;

                if (count <5){
                    setTimeout(cpuMove, 1500);
                    if (count >2 ){
                        setTimeout(gameResult, 1600);
                    }
                    
                }           
                       
        }) 
    }
    resetGame();

    musicBtn.addEventListener("click", function(){
        if(myAudio.muted == false){
            myAudio.muted = true;
            musicBtn.style.color = "red";
        }
        else{
            myAudio.muted = false;
            musicBtn.style.color = "black";
        }
        this.style.border = "none";
    })

    noSound.addEventListener("click", function(){
        if(mySound.muted == false){
            mySound.muted = true;
            yourSound.muted = true;
        }
        else{
            mySound.muted = false;
            yourSound.muted = false;
        }

        this.style.border = "none";
    })
})

function gameResult(){
    //win combinations
    var scoreTrackOne = 0;
    var scoreTrackTwo = 0;
    
    for(let i=0; i<7; i+=3){
        if(gridBoxes[i].firstElementChild.nextElementSibling.innerHTML == "x"){
            if(gridBoxes[i+1].firstElementChild.nextElementSibling.innerHTML == "x"){
                if(gridBoxes[i+2].firstElementChild.nextElementSibling.innerHTML == "x"){                    
                    scorePlayOne.innerHTML = scoreTrackOne += 1;
                }
            }
        }
        else if(gridBoxes[i].firstElementChild.nextElementSibling.innerHTML == "o"){
            if(gridBoxes[i+1].firstElementChild.nextElementSibling.innerHTML == "o"){
                if(gridBoxes[i+2].firstElementChild.nextElementSibling.innerHTML == "o"){                    
                    scorePlayTwo.innerHTML = scoreTrackTwo += 1;
                }
            }
        }
    }

    for (let i=0; i<3; i++){
        if(gridBoxes[i].firstElementChild.nextElementSibling.innerHTML == "x"){
            if(gridBoxes[i+3].firstElementChild.nextElementSibling.innerHTML == "x"){
                if(gridBoxes[i+6].firstElementChild.nextElementSibling.innerHTML == "x"){                    
                    scorePlayOne.innerHTML = scoreTrackOne += 1;
                }
            }
            else if(gridBoxes[i].firstElementChild.nextElementSibling.innerHTML == "o"){
                if(gridBoxes[i+3].firstElementChild.nextElementSibling.innerHTML == "o"){
                    if(gridBoxes[i+6].firstElementChild.nextElementSibling.innerHTML == "o"){                    
                        scorePlayTwo.innerHTML = scoreTrackTwo += 1;
                    }
                }
            }
        }
    }
    
    if(gridBoxes[0].firstElementChild.nextElementSibling.innerHTML == "x"){
        if(gridBoxes[4].firstElementChild.nextElementSibling.innerHTML == "x"){
            if(gridBoxes[8].firstElementChild.nextElementSibling.innerHTML == "x"){                    
                scorePlayOne.innerHTML = scoreTrackOne += 1;
            }
        }
        else if(gridBoxes[0].firstElementChild.nextElementSibling.innerHTML == "o"){
            if(gridBoxes[4].firstElementChild.nextElementSibling.innerHTML == "o"){
                if(gridBoxes[8].firstElementChild.nextElementSibling.innerHTML == "o"){                    
                    scorePlayTwo.innerHTML = scoreTrackTwo += 1;
                }
            }
        }
    }

    if(gridBoxes[2].firstElementChild.nextElementSibling.innerHTML == "x"){
        if(gridBoxes[4].firstElementChild.nextElementSibling.innerHTML == "x"){
            if(gridBoxes[6].firstElementChild.nextElementSibling.innerHTML == "x"){                    
                scorePlayOne.innerHTML = scoreTrackOne += 1;
            }
        }
        else if(gridBoxes[2].firstElementChild.nextElementSibling.innerHTML == "o"){
            if(gridBoxes[4].firstElementChild.nextElementSibling.innerHTML == "o"){
                if(gridBoxes[6].firstElementChild.nextElementSibling.innerHTML == "o"){                    
                    scorePlayTwo.innerHTML = scoreTrackTwo += 1;
                }
            }
        }
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
        yourSound.play();
        hiddenChars[move].innerHTML = "o";
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
           myAudio.play();
           musicOn == true;
           playerOneChoices.symbol = this.className;
           icon.classList.toggle("picked");
        })
    }

    //player chooses color
    for (let colorBox of colorBoxes){
        colorBox.addEventListener("click", function(){
           playerOneChoices.color = this.className; 
           colorBox.classList.toggle("picked");     
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
        
            if ((playerOneChoices.symbol != "none") && (playerOneChoices.color != "none")){
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
    })
}