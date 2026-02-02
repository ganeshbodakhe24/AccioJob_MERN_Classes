let secondsHand = document.getElementById("secondsHand");
let minutesHand = document.getElementById("minutesHand");
let hoursHand = document.getElementById("hoursHand");


let minutesHandTime = 180;
let secondsHandTime = 180;
let hoursHandTime = 180;
function setHands() {
    secondsHand.style.rotate = `${secondsHandTime}deg`;
    minutesHand.style.rotate = `${minutesHandTime}deg`;
    hoursHand.style.rotate = `${hoursHandTime}deg`;
}

setHands();

function clock() {
    setTimeout(() => {
        secondsHandTime += 6;
        if (secondsHandTime > 540) {
            secondsHandTime = 180;
            minutesHandTime += 6;
        }
        if (minutesHandTime > 540) {
            minutesHandTime = 180;
            hoursHandTime += 6;

        }
        if (hoursHandTime > 540) {
            hoursHandTime = 180;
        }
        setHands();
        clock();
    }, 1000);
            


}
clock();