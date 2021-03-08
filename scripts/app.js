/* 1. Start the game! */
    // How do we start the game?
        // There will be a "Start Game!" button when the page loads up.
            // (CSS will need to grey out the background while start button is active, so the focus will be on that button)
            // ONLY the button, game name, and greyed background should be at the start of the game (ICE BOX: How to play the game/Instructions)
        // The user has to click the button in order for the game to start.
            // Baby pet will appear. 
            // What will you name it?
                // User inputs name, clicks a button to continue.
            //(ICE BOX: select between two or three eggs)

/* 2. Taking care of the pet! - Baby Phase */
    // The pet is an egg at this phase so it won't need any food, naps, or playtime
        // The interactive boxes will show up but won't need to be used for this phase.
            // they will be greyed out. text will instead be: "waiting to hatch". either by default or when hovered over.
    // there is an age and timer
        // timer will count down for next age. (one minute/60 seconds)
        // when egg baby hits 1, will evolve into charmander.

/* 3. Child Phase and Adult Phase */
    // interactive buttons will now work.
        // buttons will increase hunger, energy, and entertainment by 3.
            // (ICE BOX: there will be a cooldown to interact with these buttons.)
        // cannot interact with specific buttons if needs are maxed out. 
            // Needs cap is 10.
                // If attempting interaction, hover displays `${petName} is too full to eat more!`/change and apply to pet need.
            // hunger, fun, and entertainment stats will start to decrease.
    // create an HTML and CSS for different animation when pet does any activity

/* 4. End game */
    // Pet dies when stats hit zero.
        // HTML CSS will turn sprite into a ghostie.
    // Add text "game over!"
    // Add button, want to play again? and reset to beginning start button.


/* Beginning of game - BEFORE start button is pressed.*/


$("#egg").hide();
$(".displayName").hide();
$("h1").hide();
$("ul").hide();
$(".buttonActivity").hide();
$(".time").hide();
$(".insertName").hide();
$("#charmander").hide();
$("#charmeleon").hide();
$("#charizard").hide();
$("#missingNo").hide();
$("#resetButton").hide();




const showName = function showName(){
    $(".displayName").show();
    $(".insertName").show();
}

$("#startGame").on("click", function(event){
        console.log("Start");
        $("#startGame").hide();
        initiateGame();
        showName();
});

const showElements = function showElements(){
    $("#egg").show();
    $("h1").show();
    $("ul").show();
    $(".buttonActivity").show();
    $(".time").show();
}


const inputName = function(){
    $("#registerName").on("click", function(event){
        const name = $("#namePet").val();
        $("p").text(`${name}`);

        $("#namePet").hide();
        $("#registerName").hide();
        showElements();
        timerCountdown();
})
        $('#namePet').bind("enterKey",function(e){
    });
        $('#namePet').keyup(function(e){
    if(e.keyCode == 13) {
        $(this).trigger("enterKey");
        $("#namePet").hide();
        $("#registerName").hide();
            const name = $("#namePet").val();
            $("p").text(`${name}`);
        showElements();
        timerCountdown();
        }
    })
};


let hunger=10;
const increaseHunger = function increaseHunger(){
    $("#hungerButton").on("click", function(event){
    if(hunger < 10) {
        hunger++;
        $("#hunger").text(`Hunger: ${hunger}/10`);
        console.log("Feed!", hunger);
        }         
        else {
        console.log(`It doesn't want to eat right now...`)
        }
    });
};

const decreaseHunger = function decreaseHunger() {
    if (hunger > 0){
        hunger--;
        $("#hunger").text(`Hunger: ${hunger}/10`);
        console.log("Getting hungry...");
    } 
    if (hunger == 0){
        gameOver();
    }
};

let energy=10;
const increaseEnergy = function increaseEnergy(){
    $("#energyButton").on("click", function(event){
        
    if(energy < 10) {
        energy++;
        $("#energy").text(`Energy ${energy}/10`);
        console.log("Sleep!", energy);
        } else {
        console.log(`It has too much energy!`)
        }
    })
};

const decreaseEnergy = function decreaseEnergy() {
    if (energy > 0){
        energy--;
        $("#energy").text(`Energy: ${energy}/10`);
        console.log("Getting tired...");
    }
    if (energy == 0){
        gameOver();
    }
};

let entertainment=10;
const increaseEntertainment = function increaseEntertainment(){
    
    $("#entertainmentButton").on("click", function(event){
        
    if(entertainment < 10) {
        entertainment++;
        $("#entertainment").text(`Entertainment: ${entertainment}/10`);
        console.log("Play!", entertainment);
        } else {
        console.log(`It seems to be enjoying itself!`);
        }

    })
};

const decreaseEntertainment = function decreaseEntertainment() {
    if(entertainment > 0) {
        entertainment--;
        $("#entertainment").text(`Entertainment: ${entertainment}/10`);
        console.log("Getting bored...");
    }
    if (entertainment == 0){
        gameOver();
    }
};

let time = 60;

const timerCountdown = function timerCountdown(){

    const resetTime = function resetTime() {
    console.log("AGING slowly...", time);
    $("#timer").text(`Time Until Next Age: ${time}s`);
    time--;
    if (time <= 0) {
        clearInterval(timer);
        age++;
        $("#age").text(`Age: ${age}`);
        if (age > 0) {
            ageTime();
        }
    } 
    if (time % 15 == 0){
        decreaseHunger();
    } 
    if (time % 24 == 0){
        decreaseEnergy();
    }
    if (time % 28 == 0){
        decreaseEntertainment();
    }
  };
    const timer = setInterval(resetTime, 1000);
};

let age = 0;

const ageTime = function ageTime() {
    if (age >= 1 && age <= 12){
        time = 30;
        $("#egg").hide();
        $("#charmander").show();
    } else if (age >= 13 && age <= 17){
        time = 90;
        $("#charmander").hide();
        $("#charmeleon").show();
    } else if (age >=18){
        time = 90;
        $("#charmeleon").hide();
        $("#charizard").show();
    }

    timerCountdown();
};

const initiateGame = function initiateGame(){
    increaseHunger();
    increaseEnergy();
    increaseEntertainment();
}

const gameOver = function gameOver(){
    $("#egg").hide();
    $("#charmander").hide();
    $("#charmeleon").hide();
    $("#charizard").hide();
    $("#missingNo").show();
    $("#resetButton").show();
    time = null;
    $("#timer").text("Time Until Next Age: N/A");
    age = null;
    $("#age").text("Age: Deceased");

    hunger=0;
    energy=0;
    entertainment=0;

    $("#hungerButton").attr("disabled", true);
    $("#energyButton").attr("disabled",true);
    $("#entertainmentButton").attr("disabled",true);
    

/*     $("#resetButton").on("click",function(event){
        });
    } */

}