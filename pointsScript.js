let oldScore = null;
let score = 0;

function scoreChange(){

        console.log("Changing score...");
        const scoreDisplays = document.getElementById("scoreDisplay");
        oldScore = score;
        scoreDisplays.textContent = ("Fish: " + score);
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('fishButton').addEventListener('click', function(){
        score = score + 1;
        console.log("New score: " + score)
        scoreChange();
    })
})