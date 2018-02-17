
var counter = 0;
var lost = 0;
var win = 0;    
var randonNumber = Math.floor(Math.random() * 100) + 20; 


// resetAndStart Function 
var resetAndStart = function () {
    randonNumber = Math.floor(Math.random() * 100) + 20; 
    //console.log(randonNumber);
    $("#crystals").empty(); 
    $("#number-to-guess").empty();      
    var targetNumber = $("<h1>");
    targetNumber.attr("data-randomValue", randonNumber);
    targetNumber.text(randonNumber);
    $("#number-to-guess").append(targetNumber);
    //console.log(randonNumber); 
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < 4; i++) {
        var crystalRandom = Math.floor(Math.random() * 12 + 1);
        console.log(crystalRandom);
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");
        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "assets/images/crystal.gif");
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", crystalRandom);
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }  
};  

resetAndStart();    

    
    //Event Delagation 
$(document).on("click", ".crystal-image", function () {


        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;   
        console.log("New score: " + counter);

        $("#counter").html(counter);  

        if (counter === randonNumber) {
            win++;
            $("#win").html("Wins " + win); 
            counter = 0;  
            randonNumber = 0;
            $("#counter").html("Counter") 
            resetAndStart();    
        } else if (counter >= randonNumber) {
            lost--;
            $("#lost").html("Losses " + lost); 
            counter = 0; 
            randonNumber = 0; 
            $("#counter").html("Counter")    
            resetAndStart();    
        }

});



