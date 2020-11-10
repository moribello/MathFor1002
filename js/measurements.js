// JavaScript Document

//const hoseSizes = [1.5, 1.75, 2.5, 3, 4, 5];
//const humanNames = {1.5:"inch and a half handline", 1.75:"inch and three quarters hose", 2.5:"two and a half inch hose", 3:"three inch supply line", 4:"four inch supply line", 5:"five inch LDH"};
//const hlFlow = [100, 118, 210, 328]
//const slFlow = [300, 400, 500, 600, 700, 800, 900, 1000]
//
////function to create word problem
//
//function genWordProb() {
//    let randomSize = hoseSizes[Math.floor(Math.random()*hoseSizes.length)]; //picks a random hose size
//    let hoseLength = getHoseLength(randomSize);
//    let flowRate = getFlowRate(randomSize);
//    hoseSize = (humanNames[randomSize]); //gets the human-friendly number from the data object above
//    return [flowRate, hoseLength, randomSize, hoseSize];
//}

function getRandomInt(max) { //function creates a random integer for number of lengths of hose
  return Math.floor(Math.random() * Math.floor(max));
}

function getHoseLength(randomSize) {
    let hoseLength = "";
    if (randomSize <2){
        hoseLength = (getRandomInt(4) + 1) * 50;
    } else if (randomSize <3) {
        hoseLength = (getRandomInt(8) +1) *50;
    } else {
        hoseLength = (getRandomInt(10) + 1) * 100;
    }
    return hoseLength;
}

function getFlowRate(hoseSize) {
    let flowRate = "";
    if (hoseSize <3){
        flowRate = hlFlow[Math.floor(Math.random()*hlFlow.length)]; //picks flow rate from hand line flow array
    } else {
        flowRate = slFlow[Math.floor(Math.random()*slFlow.length)]; //picks flow rate from hand line flow array
    }
    return flowRate;
}

// check user answers using external checkAnswers function found in checkAnswers.js file
function checkUsrAnswers() {
    let usrFlow = document.getElementById("usrFlow").value;
    let usrLength = document.getElementById("usrLength").value;
    let usrHoseSize = document.getElementById("usrHoseSize").value;
    // flowRate = 0, hoseLength = 1, randomSize = 2, hoseSize(human friendly) = 3
    // check user flow value
    if (checkAnswers(usrFlow, values[0]) == true) {
        document.getElementById('usrFlow').style.backgroundColor = '#ccff66';
    } else {
        document.getElementById('usrFlow').style.backgroundColor = '#ffb3b3';
    }
    if (checkAnswers(usrLength, values[1]) == true) {
        document.getElementById('usrLength').style.backgroundColor = '#ccff66';
    } else {
        document.getElementById('usrLength').style.backgroundColor = '#ffb3b3';
    }
    if (checkAnswers(usrHoseSize, values[2]) == true) {
        document.getElementById('usrHoseSize').style.backgroundColor = '#ccff66';
    } else {
        document.getElementById('usrHoseSize').style.backgroundColor = '#ffb3b3';
    }
    
    
}

let values = genWordProb(); // generate initial word problem
// flowRate = 0, hoseLength = 1, randomSize = 2, hoseSize(human friendly) = 3
 document.getElementById('wordProblem').innerHTML = `Your engine is currently running ${values[0]} gpm of water through ${values[1]} feet of ${values[3]}`

const checkBut = document.getElementById("checkAnswer");
const newBut = document.getElementById("newProb");

// Event listener for generating new problem
newBut.addEventListener('click', function () {
        let values = genWordProb();
});
newBut.addEventListener("mouseenter", function( event ) {   
  event.target.style.backgroundColor = "red";
});
newBut.addEventListener("mouseout", function( event ) {   
  event.target.style.backgroundColor = "#dddddd";
});
checkBut.addEventListener('click', function() {
    checkUsrAnswers();
});
