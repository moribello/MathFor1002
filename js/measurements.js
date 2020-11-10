// JavaScript Document

// JavaScript object to hold major values
probValues = {};
usrValues = {};

// check user answers using external checkAnswers function found in checkAnswers.js file
function checkUsrAnswers(values) {
    usrValues.usrFlow = document.getElementById("usrFlow").value;
    usrValues.usrLength = document.getElementById("usrLength").value;
    usrValues.usrHoseSize = document.getElementById("usrHoseSize").value;
    console.log(usrValues)
    // check user flow value
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
    probValues.flowRate = values[0];
    probValues.hoseLength = values[1];
    probValues.randomSize = values[2];
    probValues.hoseSize = values[3];
    console.log(probValues);
// flowRate = 0, hoseLength = 1, randomSize = 2, hoseSize(human friendly) = 3

const checkBut = document.getElementById("checkAnswer");
const newBut = document.getElementById("newProb");

// Event listener for generating new problem
newBut.addEventListener('click', function () {
    let values = genWordProb();
    probValues.flowRate = values[0];
    probValues.hoseLength = values[1];
    probValues.randomSize = values[2];
    probValues.hoseSize = values[3];
    console.log(probValues);
});
newBut.addEventListener("mouseenter", function( event ) {   
  event.target.style.backgroundColor = "ffb3b3";
});
newBut.addEventListener("mouseout", function( event ) {   
  event.target.style.backgroundColor = "#dddddd";
});
checkBut.addEventListener('click', function() {
    console.log(`Sending to checker: ${values}`)
    checkUsrAnswers(values);
});
