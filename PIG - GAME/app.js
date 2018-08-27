var score, roundscore, activeplayer, gamePlaying;






/* document.querySelector("#current-" + activeplayer).textContent = dice;

OR

document.querySelector("#current-" + activeplayer).innerHTML = dice;

*/

init();



document.querySelector(".btn-roll").addEventListener("click" , function(){

    if(gamePlaying){
            
            var dice = Math.floor(Math.random() * 6) + 1;

            diceDom = document.querySelector(".dice");
            diceDom.style.display = 'block';
            diceDom.src = "dice-" + dice + ".png";

            if( dice > 1){
            	//increase round score of current player
            	roundscore = roundscore + dice;
            	document.querySelector("#current-" + activeplayer).textContent = roundscore;
            }
            else{
            	//change player
            	nextplayer();

          }

    }
})

document.querySelector(".btn-hold").addEventListener("click", function() {

      if(gamePlaying){
            
            score[activeplayer] += roundscore;

            document.querySelector("#score-" + activeplayer).textContent = score[activeplayer];

            if(score[activeplayer] >= 10){
              document.querySelector("#name-" + activeplayer).textContent = "Winner!";
            	document.querySelector(".player-" + activeplayer + "-panel").classList.add("winner");
              document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
              gamePlaying = false;
            }

            //next palyer 
              nextplayer();

      }
	
})

document.querySelector(".btn-new").addEventListener("click", init);

function nextplayer(){

	activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;

    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = 'none';

    roundscore = 0;

}



function init(){


gamePlaying = true;
score = [0, 0];
roundscore = 0;
activeplayer = 0;

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.querySelector(".dice").style.display = 'none';

document.querySelector(".btn-roll").style.visibility = 'visible';
document.querySelector(".btn-hold").style.visibility = 'visible';

document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("remove");
document.querySelector(".player-0-panel").classList.remove("remove");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add ("active");
}