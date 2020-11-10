// JavaScript Document
const hoseSizes = [1.5, 1.75, 2.5, 3, 4, 5];
const humanNames = {1.5:"inch and a half handline", 1.75:"inch and three quarters hose", 2.5:"two and a half inch hose", 3:"three inch supply line", 4:"four inch supply line", 5:"five inch LDH"};
const hlFlow = [100, 118, 210, 328]
const slFlow = [300, 400, 500, 600, 700, 800, 900, 1000]

//function to create word problem

function genWordProb() {
    let randomSize = hoseSizes[Math.floor(Math.random()*hoseSizes.length)]; //picks a random hose size
    let hoseLength = getHoseLength(randomSize);
    let flowRate = getFlowRate(randomSize);
    hoseSize = (humanNames[randomSize]); //gets the human-friendly number from the data object above
//
//    document.getElementById('wordProblem').innerHTML = `Your engine is currently running ${flowRate} gpm of water through ${hoseLength} feet of ${hoseSize}`
    return [flowRate, hoseLength, randomSize, hoseSize];
}