
var usercolorPat=[];

var compColorPat=[];

var level=0;

var firstornot=false;

var colorSeq=["red", "blue", "green", "yellow"];

$(document).keypress(function (){

    if(!firstornot)
    {
      $("h1").text("Level  "+level);
      sequence();
      firstornot=true;
    }

})

$(".btn").click(function(){

    var clickedColor = this.id;

    usercolorPat.push(clickedColor);

    soundPlay(clickedColor);
    animatePress(clickedColor);
    checkAnswer(usercolorPat.length-1);

});


function checkAnswer(currentLevel){

      if(compColorPat[currentLevel]===usercolorPat[currentLevel])
      {
        
           if(usercolorPat.length===compColorPat.length)
           {
             setTimeout(function() {
                  sequence();
             }, 500);
           }
      }else{

        soundPlay("wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
             $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
      }

}

function sequence(){

  usercolorPat=[];

  level=level+1;

  $("h1").text("Level  "+level);

  var randomNum=Math.floor(Math.random()*4);

  var colorSel=colorSeq[randomNum];

  compColorPat.push(colorSeq[randomNum]);

  var idSel="#"+colorSel;

  $(idSel).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  soundPlay(colorSel);

}

function animatePress(aniName){
  $("#"+aniName).addClass("pressed");

  setTimeout(function() {
       $("#"+aniName).removeClass("pressed");
   }, 100);

}

function soundPlay(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  compColorPat = [];
  firstornot = false;
}
