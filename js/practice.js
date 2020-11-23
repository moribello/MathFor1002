// JavaScript Document

// JavaScript object to hold major values

let usrValues = {};

// check user answers using external checkAnswers function found in checkAnswers.js file
function checkUsrAnswers() {
    usrValues.usrCoef = parseFloat(document.getElementById("usrCoef").value);
    usrValues.usrFlow = parseFloat(document.getElementById("usrFlow").value);
    usrValues.usrLength = parseFloat(document.getElementById("usrLength").value);
    usrValues.usrDiam = parseFloat(document.getElementById("usrDiam").value);
    usrValues.usrNP = parseFloat(document.getElementById("usrNP").value);
    usrValues.usrFL = (parseFloat(document.getElementById("usrFL").value)).toFixed(2);
    usrValues.usrEL = parseFloat(document.getElementById("usrEL").value);
    usrValues.usrPumpPress = parseFloat(document.getElementById("usrPumpPress").value);
    // If Friction Loss variables are visible, check them
    if (document.getElementById("flVariablesArea").style.display == "flex") {
        let c=values.flCoef
        let q=values.flowRate / 100;
        let l=values.hoseLength / 100
        //check for correct C value
        if (checkAnswers(usrValues.usrCoef, c) == true) {           
            document.getElementById('usrCoef').style.backgroundColor = '#ccff66';
            } else {
            document.getElementById('usrCoef').style.backgroundColor = '#ffb3b3';
        }
        //check for correct Q value
        if (checkAnswers(usrValues.usrFlow, q) == true) {           
        document.getElementById('usrFlow').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrFlow').style.backgroundColor = '#ffb3b3';
        }
        //check for correct L value
        if (checkAnswers(usrValues.usrLength, l) == true) {           
        document.getElementById('usrLength').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrLength').style.backgroundColor = '#ffb3b3';
        }
    }
    //if nozzle variables are visible, check them
    if (document.getElementById("nozzleVariablesArea").style.display == "flex"){
        console.log(`Checking nozzle variables - ${usrValues.usrDiam} vs ${values.tipSize}`)
        //check for correct d value
        if (checkAnswers(usrValues.usrDiam, values.tipSize) == true) {
        document.getElementById('usrDiam').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrDiam').style.backgroundColor = '#ffb3b3';
        }
        //check for correct NP value
        if (checkAnswers(usrValues.usrNP, values.tipPress) == true) {
        document.getElementById('usrNP').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrNP').style.backgroundColor = '#ffb3b3';
        }
    }
    // check friction loss value
    if(checkAnswers(usrValues.usrFL, values.fl) == true) {
        document.getElementById('usrFL').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrFL').style.backgroundColor = '#ffb3b3';
        }
    if(checkAnswers(usrValues.usrEL, values.eLoss) == true) {
        document.getElementById('usrEL').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrEL').style.backgroundColor = '#ffb3b3';
        }
    //check if user is within 5 psi of total pump pressure
    let tpHigh = parseFloat(values.tPump) + 5;
    let tpLow = parseFloat(values.tPump) - 5;
    console.log(typeof usrValues.usrPumpPress);
    if(usrValues.usrPumpPress >= tpLow && usrValues.usrPumpPress <= tpHigh) {
        document.getElementById('usrPumpPress').style.backgroundColor = '#ccff66';
        } else {
        document.getElementById('usrPumpPress').style.backgroundColor = '#ffb3b3';
        }
    
} //curly bracket for end of function


let values = genWordProb(); // generate initial word problem
    if(values.isElev == true){
        document.getElementById('wordProblem').innerHTML = `Calculate the total loss of ${values.hoseLength} feet of ${values.humanNames} equipped with a ${values.humanTip}. <br> <br> Your crew is operating on the ${values.workingFloor} floor.`
    } else {
        document.getElementById('wordProblem').innerHTML = `Calculate the total loss of ${values.hoseLength} feet of ${values.humanNames} equipped with a ${values.humanTip}`
    }

const checkBut = document.getElementById("checkAnswer");
const newBut = document.getElementById("newProb");
const flHeader = document.getElementById("flHeader");
const nozzleHeader = document.getElementById("nozzleHeader");

//Hide friction loss and nozzle areas
document.getElementById("flVariablesArea").style.display = "none";
document.getElementById("nozzleVariablesArea").style.display = "none";

// Event listener for generating new problem
newBut.addEventListener('click', function () {
    values = {};
    values = genWordProb(); // generate initial word problem
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
    document.getElementById("usrDiam").value = "";
    document.getElementById("usrDiam").style.backgroundColor = "#dddddd";
    document.getElementById("usrNP").value = "";
    document.getElementById("usrNP").style.backgroundColor = "#dddddd";
    document.getElementById("usrFL").value = "";
    document.getElementById("usrFL").style.backgroundColor = "#dddddd";
    document.getElementById("usrEL").value = "";
    document.getElementById("usrEL").style.backgroundColor = "#dddddd";
    document.getElementById("usrPumpPress").value = "";
    document.getElementById("usrPumpPress").style.backgroundColor = "#dddddd";
});

newBut.addEventListener("mouseenter", function( event ) {   
  event.target.style.backgroundColor = "ffb3b3";
});
newBut.addEventListener("mouseout", function( event ) {   
  event.target.style.backgroundColor = "#dddddd";
});

// Event listeners for headers
flHeader.addEventListener('click', function() {
    const flArea = document.getElementById("flVariablesArea");
    if (flArea.style.display == "flex") {
        flArea.style.display = "none";
        flHeader.innerHTML = "Click to show Friction Loss variables"
    } else {
        flArea.style.display = "flex";
        flHeader.innerHTML = "Click to hide row";
    }
})
nozzleHeader.addEventListener('click', function() {
    const nozzleArea = document.getElementById("nozzleVariablesArea");
    if (nozzleArea.style.display == "flex") {
        nozzleArea.style.display = "none";
        nozzleHeader.innerHTML = "Click to show Nozzle variables"
    } else {
        nozzleArea.style.display = "flex";
        nozzleHeader.innerHTML = "Click to hide row";
    }
})

checkBut.addEventListener('click', function() {
    checkUsrAnswers();
});
