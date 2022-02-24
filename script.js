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
        document.getElementById("questionOne").style.border = "green"
    } else {
        document.getElementById("answerOne").innerHTML = "Incorrect"
    } 

    if (secondQuestion === "two" || secondQuestion === "2") {
        document.getElementById("answerTwo").innerHTML = "Correct"
        grade++
    } else {
        document.getElementById("answerTwo").innerHTML = "Incorrect"
    } 

    if (thirdQuestion === "three") {
        document.getElementById("answerThree").innerHTML = "Correct"
        grade++
    } else {
        document.getElementById("answerThree").innerHTML = "Incorrect"
    } 
    
    if (fourthQuestion === "four") {
        document.getElementById("answerFour").innerHTML = "Correct"
        grade++
    } else {
        document.getElementById("answerFour").innerHTML = "Incorrect"
    } 
   
    // Tell user grade + Response
   alert("You got " + grade + "/4 " + "(" + grade/0.04 + "%)")

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

