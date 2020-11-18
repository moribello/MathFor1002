// JavaScript Document
const tipSizes = [.75, .9375, 1, 1.125, 1.25, 1.375, 1.5, 1.75, 2];
const humanNames = {.74:"&frac34;", .9375:"15&frasl;16", 1:"one", 1.125:"1&frasl;8", 1.25:"1 &frac14;", 1.375:"1 3&frasl8;", 1.5:"1 &frac12;", 1.75:"1 &frac34;", 2:"2"};

//function to create word problem
function getRandomInt(max) { //function creates a random integer 
  return Math.floor(Math.random() * Math.floor(max));
}

function getIsHandLine(tipSize) {
    if (tipSize == 1.25){
        coinFlip = getRandomInt(2);
        console.log(coinFlip);
        if (coinflip < 1){
            return true;
        } else {
            return false;
        }
    } else if (tipSize <1.25) {
        return true;
    } else {
        return false;
    }
}

function genNozzleProb() {
    let tipSize = hoseSizes[Math.floor(Math.random()*tipSizes.length)]; //picks a random tip size
    let isHandLine = getIsHandLine(tipSize); //determines if this is a hand line or a master stream
    let humanName = (humanNames[tipSize]); //gets the human-friendly number from the data object above
//
    return [tipSize, isHandLine, humanName];
}