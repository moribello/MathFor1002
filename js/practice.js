// JavaScript Document

// JavaScript object to hold major values
probValues = {};
usrValues = {};

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

let values = genWordProb(); // generate initial word problem
    if(values.isElev == true){
        document.getElementById('wordProblem').innerHTML = `Calculate the total loss of ${values.hoseLength} feet of ${values.humanNames} equipped with a ${values.humanTip}. <br> <br> Your crew is operating on the ${values.workingFloor} floor.`
    } else {
        document.getElementById('wordProblem').innerHTML = `Calculate the total loss of ${values.hoseLength} feet of ${values.humanNames} equipped with a ${values.humanTip}`
    }

const checkBut = document.getElementById("checkAnswer");
const newBut = document.getElementById("newProb");

// Event listener for generating new problem
newBut.addEventListener('click', function () {
    let values = genWordProb(); // generate initial word problem
    if(values.isElev == true){
        document.getElementById('wordProblem').innerHTML = `Calculate the total loss of ${values.hoseLength} feet of ${values.humanNames} equipped with a ${values.humanTip}. <br> <br> Your crew is operating on the ${values.workingFloor} floor.`
    } else {
        document.getElementById('wordProblem').innerHTML = `Calculate the total loss of ${values.hoseLength} feet of ${values.humanNames} equipped with a ${values.humanTip}`
    }
    document.getElementById("usrCoef").value = "";
    document.getElementById("usrCoef").style.backgroundColor = "#dddddd";
    document.getElementById("usrFlow").value = "";
    document.getElementById("usrFlow").style.backgroundColor = "#dddddd";
    document.getElementById("usrLength").value = "";
    document.getElementById("usrLength").style.backgroundColor = "#dddddd";
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
