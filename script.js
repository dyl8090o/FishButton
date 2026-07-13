const rightFishPics = [
    "Fish Pics/1.png",
    "Fish Pics/4.png",
    "Fish Pics/5.png",
    "Fish Pics/6.png",
    "Fish Pics/9.png",
    "Fish Pics/7.png",
    "Fish Pics/11.png",
    "Fish Pics/14.png",
    "Fish Pics/13.png",
    "Fish Pics/15.png",
    "Fish Pics/16.png",
    "Fish Pics/18.png",
]
const leftFishPics = [
    "Fish Pics/2.png",
    "Fish Pics/3.png",
    "Fish Pics/8.png",
    "Fish Pics/10.png",
    "Fish Pics/17.png",
    "Fish Pics/19.png",
]
const fishFaces = [
    leftFishPics[Math.floor(Math.random() * leftFishPics.length)],
    rightFishPics[Math.floor(Math.random() * rightFishPics.length)]
]


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("fishButton").onclick = function(){

        const face = Math.random() < 0.5 ? 0 : 1;
        if (face === 0) {
            var fishPics = leftFishPics;
        } else {
            var fishPics = rightFishPics;
        }

        let newFish = document.createElement("img");
        newFish.className = "fish";
        newFish.src = fishPics[Math.floor(Math.random() * fishPics.length)];
        document.body.appendChild(newFish)
        fishBehavior(newFish, face)
    }
})

function fishBehavior(fish, face) {

    const randomHeight = Math.floor(Math.random() * (window.innerHeight - 300));

    if (face === 1) {
            fish.animate([
        { transform: `translate(-300px, ${randomHeight}px)` },
        { transform: `translate(120vw, ${randomHeight}px)` }
        ], {
        duration: 5000,
        iterations: 1,
        fill: 'forwards'
    })
    } else {
        fish.animate([
            { transform: `translate(120vw, ${randomHeight}px)` },
            { transform: `translate(-300px, ${randomHeight}px)` }
        ], {
            duration: 5000,
            iterations: 1,
            fill: 'forwards'
        });
    }

    setTimeout(() => {
        fish.remove();
    }, 5000);
}