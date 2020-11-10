// JavaScript Document
const hoseSizes = [1.5, 1.75, 2.5, 3, 4, 5];
const humanNames = {1.5:"inch and a half handline", 1.75:"inch and three quarters hose", 2.5:"two and a half inch hose", 3:"three inch supply line", 4:"four inch supply line", 5:"five inch LDH"};
const hlFlow = [100, 118, 210, 328]
const slFlow = [300, 400, 500, 600, 700, 800, 900, 1000]

//function to create word problem
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


function genWordProb() {
    let randomSize = hoseSizes[Math.floor(Math.random()*hoseSizes.length)]; //picks a random hose size
    let hoseLength = getHoseLength(randomSize);
    let flowRate = getFlowRate(randomSize);
    hoseSize = (humanNames[randomSize]); //gets the human-friendly number from the data object above
//
    document.getElementById('wordProblem').innerHTML = `Your engine is currently running ${flowRate} gpm of water through ${hoseLength} feet of ${hoseSize}`
    return [flowRate, hoseLength, randomSize, hoseSize];
}