// JavaScript Document
//let probData = {};
const hoseSizes = [1.5, 1.75, 2.5, 3, 4, 5];
const humanNames = {1.5:"inch and a half handline", 1.75:"inch and three quarters hose", 2.5:"two and a half inch hose", 3:"three inch line with 2 &frac12; inch couplings", 4:"four inch supply line", 5:"five inch LDH"};
const hlTipSizes = [.75, .9375, 1, 1.125, 1.25];
const msTipSizes = [.9375, 1, 1.125, 1.25, 1.5];
const humanTipSizes = {.75: "&frac34;", .9375: " <sup>15</sup> &#8260; <sub>16</sub> ", 1: "1", 1.125: "1 &frac18;", 1.25: "1 &frac14;", 1.5: "1 &frac12;"};
const coefficients = {1.5: 24, 1.75: 15.5, 2.5: 2, 3: 0.8, 4: 0.2, 5: 0.08}
const smoothHLFlowRtes = {.75: 118, .9375: 185, 1: 210, 1.125: 266, 1.25: 328};
const smoothMSFlowRtes = {.9375: 233, 1: 266, 1.125: 336, 1.25: 415, 1.5: 598};
const humanWorkingFloor = {1: "second", 2: "third", 3: "fourth", 4: "fifth", 5: "sixth"}
//const hlFlow = [100, 118, 210]
//const deuceFlow = [118, 210, 300, 328]
//const slFlow = [300, 400, 500, 600, 700, 800, 900, 1000]

//function to generate random number
function getRandomInt(max) { //function creates a random integer
  return Math.floor(Math.random() * Math.floor(max));
}

function coinToss() {
    let coinFlip = getRandomInt(2); //generates either 1 or two - essentially heads or tails
    if(coinFlip == 1) {
        return Boolean(true);
    } else {
        return Boolean(false);              
    }                
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

function elevation(){
    return getRandomInt(5) + 1;
}

function genWordProb() {
    let probData = {};
    let isFog = coinToss();
    probData.hoseSize = hoseSizes[Math.floor(Math.random()*hoseSizes.length)]; //picks a random hose size
    probData.flCoef = coefficients[probData.hoseSize];
    probData.humanNames = (humanNames[probData.hoseSize]); //gets the human-friendly hose size
    probData.hoseLength = getHoseLength(probData.hoseSize);
    if(isFog == false){ //calculate smooth bore size and flow
        if(probData.hoseSize <3){
            probData.tipSize = hlTipSizes[Math.floor(Math.random()*hlTipSizes.length)];//picks a random tip size from handline tips
             probData.flowRate = smoothHLFlowRtes[probData.tipSize];
        } else {
            probData.tipSize = msTipSizes[Math.floor(Math.random()*msTipSizes.length)];
            probData.flowRate = smoothMSFlowRtes[probData.tipSize]
        }
        probData.humanTip = `smooth bore nozzle with a ${humanTipSizes[probData.tipSize]} inch tip`;
    } else { //calculate fog nozzle flow
        if(probData.hoseSize < 2){
            probData.flowRate = 100;
            probData.humanTip = "100 gpm fog nozzle";
        } else if(probData.hoseSize == 2.5) {
            probData.flowRate = 300;
            probData.humanTip = "300 gpm fog nozzle"
        } else {
            probData.flowRate = 700;
            probData.humanTip = "700 gpm fog monitor line"
        }
    }
    if(probData.flowRate >= 350){
        probData.isMS = Boolean(true);
    } else {
        probData.isMS = Boolean(false);
    }
    //add tip pressure based on nozzle type and water flow
    if(isFog == true){
        probData.tipPress = 100;
    } else {
        if(probData.isMS == true){
            probData.tipPress = 80;
        } else {
            probData.tipPress = 50;
        }
    }
    probData.isElev = coinToss();
    if(probData.isElev == true) {
        probData.floors = elevation();
        probData.workingFloor = humanWorkingFloor[probData.floors];
        probData.eLoss = probData.floors * 5
    } else {
        probData.eLoss = 0;
    }

    //calculate friction loss
    let c = probData.flCoef;
    let q = probData.flowRate / 100;
    let l = probData.hoseLength / 100
    probData.fl  = parseFloat((c * Math.pow(q, 2) * l).toFixed(2));
    
    //calculate pump pressure
    let frictionLoss = probData.fl
    let elevLoss = probData.eLoss;
    let tipPress = probData.tipPress;
    probData.tPump = (frictionLoss + elevLoss + tipPress).toFixed(0);
    
    console.log(probData);
    
    return probData;
    

}