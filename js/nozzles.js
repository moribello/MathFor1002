// JavaScript Document

// JavaScript object to hold major values
let probValues = {};
let usrValues = {};
let lineType = "";

// check user answers using external checkAnswers function found in checkAnswers.js file
function checkUsrAnswers() {
    usrValues.usrFlow = document.getElementById("usrFlow").value;
    usrValues.usrLength = document.getElementById("usrLength").value;
    usrValues.usrHoseSize = document.getElementById("usrHoseSize").value;
    // check user flow, length, and hose size values
    if (checkAnswers(usrValues.usrFlow, probValues.flowRate) == true) {
        document.getElementById('usrFlow').style.backgroundColor = '#ccff66';
    } else {
        document.getElementById('usrFlow').style.backgroundColor = '#ffb3b3';
    }
    if (checkAnswers(usrValues.usrLength, probValues.hoseLength) == true) {
        document.getElementById('usrLength').style.backgroundColor = '#ccff66';
    } else {
        document.getElementById('usrLength').style.backgroundColor = '#ffb3b3';
    }
    if (checkAnswers(usrValues.usrHoseSize, probValues.randomSize) == true) {
        document.getElementById('usrHoseSize').style.backgroundColor = '#ccff66';
    } else {
        document.getElementById('usrHoseSize').style.backgroundColor = '#ffb3b3';
    }
    
    
}

let values = genNozzleProb(); // generate initial word problem
// tipSize = 0, isHandLine = 1, humanName = 2. isHandLine returns 'true' or 'false'
    probValues.tipSize = values[0];
    probValues.isHandLine = values[1];
    if (probValues.isHandLine = true){
        lineType = "hand line";
    } else {
        lineType = "master stream"
    }
    probValues.humanName = values[2];
// flowRate = 0, hoseLength = 1, randomSize = 2, hoseSize(human friendly) = 3
    document.getElementById('wordProblem').innerHTML = `You have a smooth bore nozzle with a ${probValues.humanName} tip on it on a ${lineType}.`

const checkBut = document.getElementById("checkAnswer");
const newBut = document.getElementById("newProb");

// Event listener for generating new problem
newBut.addEventListener('click', function () {
    let values = genNozzleProb();
    probValues.tipSize = values[0];
    probValues.isHandLine = values[1];
    if (probValues.isHandLine = true){
        lineType = "hand line";
    } else {
        lineType = "master stream"
    }
    probValues.humanName = values[2];
    document.getElementById("usrFlow").value = "";
    document.getElementById("usrFlow").style.backgroundColor = "#dddddd";
    document.getElementById("usrLength").value = "";
    document.getElementById("usrLength").style.backgroundColor = "#dddddd";
    document.getElementById("usrHoseSize").value = "";
    document.getElementById("usrHoseSize").style.backgroundColor = "#dddddd";
    document.getElementById('wordProblem').innerHTML = `You have a smooth bore nozzle with a ${probValues.humanName} tip on it on a ${lineType}.`
});
newBut.addEventListener("mouseenter", function( event ) {   
  event.target.style.backgroundColor = "ffb3b3";
});
newBut.addEventListener("mouseout", function( event ) {   
  event.target.style.backgroundColor = "#dddddd";
});
checkBut.addEventListener('click', function() {
    checkUsrAnswers();
});
