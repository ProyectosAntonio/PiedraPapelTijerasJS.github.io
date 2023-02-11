/* Author: Antonio Perea
   proyectosantonioperea@gmail.com */

$(document).ready(function(){

    //URL images
    const rock = $('#rock').attr('src');
    const paper = $('#paper').attr('src');
    const scissor = $('#scissors').attr('src');

    //User's choice of images
    const userOptionChoosen = $(".options img");
    //Image chosen by user
    const userOnGame = $('#user-image');
    //Random image choosen by PC
    const pcOnGame = $('#pc-image');

    //To start and end the game
    let gameOn = true;

    //Text indicating the result
    let resultText = $('.result-text');

    //Initial points.
    let pcCounter = 0;
    let userCounter = 0;

    //Restart button
    const restartButton = $('#restart-button a img');

    //Points for each player.
    let pcPoints = $('#pc-points');
    let userPoints = $('#user-points');

   
    
    if(gameOn){

    //User selection
    for (let i = 0; i < userOptionChoosen.length; i++) {
        
        userOptionChoosen[i].addEventListener("click", function(e){

            
            if(gameOn){
            //src of the image chosen by user
            let srcImage = e.target.getAttribute('src');
            userOnGame.html('<img class="image-ongame" src="' + srcImage + '">');
            }
            
            pcOption();
            calcResults();
            
            //Result text value
            let resultTextValue = $('.result-text').text();

            pointsEarned(resultTextValue);

            maxRounds();
            

       });
    }
    }


    //PC selection function
    function pcOption(){
        if(gameOn){
            const randomLengthImage = Math.floor(Math.random() * userOptionChoosen.length);
            const pcImage = userOptionChoosen[randomLengthImage].getAttribute('src');
            pcOnGame.html('<img class="image-ongame" src="' + pcImage + '">');
        }
    }



    //Results calculation function
    function calcResults(){
        if(gameOn){
        //src of the images in game
        const srcUser = $('#user-image img').attr('src');
        const srcPC = $('#pc-image img').attr('src');
        
        if(srcUser == srcPC){
           return resultText.html('Empate');
        }else if(srcUser == rock){
            if(srcPC == scissor) return resultText.html('Ganas');
            if(srcPC == paper) return resultText.html('Pierdes');
        }else if(srcUser == paper){
            if(srcPC == rock) return resultText.html('Ganas');
            if(srcPC == scissor) return resultText.html('Pierdes');
        }else if(srcUser == scissor){
            if(srcPC == paper) return resultText.html('Ganas');
            if(srcPC == rock) return resultText.html('Pierdes');
        }
    }
}

    //Points winners function
    function pointsEarned(r){
                if (r === 'Ganas') {
                    userCounter++
                    userPoints.text(userCounter);
                    
                }else if(r === 'Pierdes'){
                    pcCounter++
                    pcPoints.text(pcCounter);
                    
                }    
    }

    //Max round function
    function maxRounds(){
        if (pcCounter > 4 || userCounter > 4) {
            

            if(pcCounter > 4) {
                resultText.html('Has perdido la partida').addClass('final-result-text');;
                resultText.css('color', 'red');
            }else if(userCounter > 4){
                resultText.html('Has ganado la partida').addClass('final-result-text');;
                resultText.css('color', 'green');
            }

            restartButton.addClass('restart-effect');

            gameOn = false;
            
        }
    }

    

});