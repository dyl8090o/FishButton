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
    "Fish Pics/12.png",
    "Fish Pics/22.png",
    "Fish Pics/24.png",
    
    "Fish Pics/27.png",
    "Fish Pics/28.png",
    "Fish Pics/30.png",
    "Fish Pics/35.png",
    "Fish Pics/36.png",
    "Fish Pics/38.png",
    "Fish Pics/41.png",
    "Fish Pics/44.png",
    "Fish Pics/45.png",
    "Fish Pics/47.png",
    "Fish Pics/50.png",
    "Fish Pics/53.png",
    "Fish Pics/54.png",
    "Fish Pics/56.png",
    "Fish Pics/58.png",
    "Fish Pics/61.png",
    "Fish Pics/62.png",
]
const leftFishPics = [
    "Fish Pics/2.png",
    "Fish Pics/3.png",
    "Fish Pics/8.png",
    "Fish Pics/10.png",
    "Fish Pics/17.png",
    "Fish Pics/19.png",
    "Fish Pics/20.png",
    "Fish Pics/21.png",
    "Fish Pics/25.png",
    "Fish Pics/23.png",

    "Fish Pics/26.png",
    "Fish Pics/29.png",
    "Fish Pics/31.png",
    "Fish Pics/32.png",
    "Fish Pics/33.png",
    "Fish Pics/34.png",
    "Fish Pics/37.png",
    "Fish Pics/39.png",
    "Fish Pics/40.png",
    "Fish Pics/42.png",
    "Fish Pics/43.png",
    "Fish Pics/46.png",
    "Fish Pics/48.png",
    "Fish Pics/49.png",
    "Fish Pics/51.png",
    "Fish Pics/52.png",
    "Fish Pics/55.png",
    "Fish Pics/57.png",
    "Fish Pics/59.png",
    "Fish Pics/60.png",
    "Fish Pics/63.png",
    "Fish Pics/64.png",
    "Fish Pics/65.png",


]
const fishFaces = [
    leftFishPics[Math.floor(Math.random() * leftFishPics.length)],
    rightFishPics[Math.floor(Math.random() * rightFishPics.length)]
]

let seenFish = []

function preloadImage(url)
{
    var img = new Image();
      img.src = url;
      return img;
}

function preloadImages(urls) {
    return urls.map(preloadImage);
}

const preloadedRightFish = preloadImages(rightFishPics);
const preloadedLeftFish = preloadImages(leftFishPics);

let fishCounter = document.getElementById("fishCounter")
fishCounter.textContent = ("Fish Seen: " + seenFish.length + "/" + (rightFishPics.length + leftFishPics.length))

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("fishButton").onclick = function(){

        let face = Math.random() < 0.5 ? 0 : 1;
        if (face === 0) {
            var fishPics = leftFishPics;
        } else {
            var fishPics = rightFishPics;
        }

        let newFish = document.createElement("img");
        newFish.className = "fish";
        newFish.src = fishPics[Math.floor(Math.random() * fishPics.length)];
        document.body.appendChild(newFish)

        if (!seenFish.includes(newFish.src)){
            seenFish.push(newFish.src)
            let fishCounter = document.getElementById("fishCounter")
            fishCounter.textContent = ("Fish Seen: " + seenFish.length + "/" + (rightFishPics.length + leftFishPics.length))
            console.log("added " + newFish.src + " to seenFish")
        }

        const flip = Math.random() < 0.5 ? 0 : 1;
        if (flip === 0) {
            console.log("Normal dircetion")
            let scale = ""
             fishBehavior(newFish, face, scale)
        } else {
            console.log("Flipped")
            let scale = " scaleX(-1)"
            if (face === 0){
                face = 1
                 fishBehavior(newFish, face, scale)
            }else {
                face = 0
                 fishBehavior(newFish, face, scale)
            }
        }


       
    }

       document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) {
    event.preventDefault();
  }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
    lastTouchEnd = now;
  }
}, { passive: false });

})

function fishBehavior(fish, face, scale) {

    const randomHeight = Math.floor(Math.random() * (window.innerHeight - 300));
    const smallScreen = window.matchMedia("(max-width: 1439px)")
    const smallerScreen = window.matchMedia("(max-width: 484px)")

    if (smallerScreen.matches){
    
        
        console.log("smallerScreen")
         if (face === 1) {
            fish.animate([
        { transform: `translate(0vh, ${randomHeight}px)${scale}` },
        { transform: `translate(200vw, ${randomHeight}px)${scale}` }
        ], {
        duration: 2500,
        iterations: 1,
        fill: 'forwards'
    })
    } else {
        fish.animate([
            { transform: `translate(200vw, ${randomHeight}px)${scale}` },
            { transform: `translate(0vh, ${randomHeight}px)${scale}` }
        ], {
            duration: 2500,
            iterations: 1,
            fill: 'forwards'
        });

            setTimeout(() => {
        fish.remove();
    }, 3500);

    }
    } else if (smallScreen.matches) {

                console.log("smallScreen")
            if (face === 1) {
            fish.animate([
        { transform: `translate(0vh, ${randomHeight}px)${scale}` },
        { transform: `translate(160vw, ${randomHeight}px)${scale}` }
        ], {
        duration: 4000,
        iterations: 1,
        fill: 'forwards'
    })
    } else {
        fish.animate([
            { transform: `translate(160vw, ${randomHeight}px)${scale}` },
            { transform: `translate(0vh, ${randomHeight}px)${scale}` }
        ], {
            duration: 4000,
            iterations: 1,
            fill: 'forwards'
        });

            setTimeout(() => {
        fish.remove();
    }, 5000);

    }} else {
        console.log("bigScreen")

         if (face === 1) {
            fish.animate([
        { transform: `translate(-10vh, ${randomHeight}px)${scale}` },
        { transform: `translate(120vw, ${randomHeight}px)${scale}` }
        ], {
        duration: 6000,
        iterations: 1,
        fill: 'forwards'
    })
    } else {
        fish.animate([
            { transform: `translate(120vw, ${randomHeight}px)${scale}` },
            { transform: `translate(-10vh, ${randomHeight}px)${scale}` }
        ], {
            duration: 6000,
            iterations: 1,
            fill: 'forwards'
        });

            setTimeout(() => {
        fish.remove();
    }, 7000);

            setTimeout(() => {
        fish.remove();
    }, 7000);

    }
}}