let oldScore = null;
export let score = 0;

export function scoreChange(change){

        console.log("Changing score...");
        score = score + change;
        console.log("New score: " + score)
        const scoreDisplays = document.getElementById("scoreDisplay");
        oldScore = score;
        scoreDisplays.textContent = ("Fish: " + score);
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('fishButton').addEventListener('click', function(){
        scoreChange(1);
    })
})