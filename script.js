// Event listener
document.getElementById("answerSubmit").addEventListener("click", grade);

// Run grade function when button is clicked
function grade() {
    // Variables
    let firstQuestion = document.getElementById("questionOne").value;
    let secondQuestion = document.getElementById("questionTwo").value;
    let thirdQuestion = document.getElementById("questionThree").value;
    let fourthQuestion = document.getElementById("questionFour").value;
    let grade = 0
    
    // Answer Checker
    if (firstQuestion === "one") {
        document.getElementById("answerOne").innerHTML = "Correct"
        grade++
        document.getElementById("answerOne").style.color = "green"
        document.getElementById("questionOne").style.color = "green"
    } else {
        document.getElementById("answerOne").innerHTML = "Incorrect"
        document.getElementById("answerOne").style.color = "red"
        document.getElementById("questionOne").style.color = "red"
    } 

    if (secondQuestion === "two" || secondQuestion === "2") {
        document.getElementById("answerTwo").innerHTML = "Correct"
        grade++
        document.getElementById("answerTwo").style.color = "green"
        document.getElementById("questionTwo").style.color = "green"
    } else {
        document.getElementById("answerTwo").innerHTML = "Incorrect"
        document.getElementById("answerTwo").style.color = "red"
        document.getElementById("questionTwo").style.color = "red"
    } 

    if (thirdQuestion === "three") {
        document.getElementById("answerThree").innerHTML = "Correct"
        grade++
        document.getElementById("answerThree").style.color = "green"
        document.getElementById("questionThree").style.color = "green"
    } else {
        document.getElementById("answerThree").innerHTML = "Incorrect"
        document.getElementById("answerThree").style.color = "red"
        document.getElementById("questionThree").style.color = "red"
    } 
    
    if (fourthQuestion === "four") {
        document.getElementById("answerFour").innerHTML = "Correct"
        grade++
        document.getElementById("answerFour").style.color = "green"
        document.getElementById("questionFour").style.color = "green"
    } else {
        document.getElementById("answerFour").innerHTML = "Incorrect"
        document.getElementById("answerFour").style.color = "red"
        document.getElementById("questionFour").style.color = "red"
    } 
   
    // Tell user grade + Response
    document.getElementById("finalGrade").innerHTML = "You got " + grade + "/4 " + "(" + grade/0.04 + "%) "

    if (grade === 4) {
        document.getElementById("response").innerHTML = "Amazing!"
    } else if (grade === 3) {
        document.getElementById("response").innerHTML = "Great job!"
    } else if (grade === 2) {
        document.getElementById("response").innerHTML = "So close!"
    } else {
        document.getElementById("response").innerHTML = "Nice try!"
    }
}

