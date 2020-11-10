function checkAnswers(userAns, correctAns) {
    if (parseFloat(userAns) === parseFloat(correctAns)){
        return true;
    } else {
        return false;
    }
}