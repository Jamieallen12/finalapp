console.log("hello")

//global variables
var answer = 0
var mode = "hard"

function newQuestion(){
    //grab the H2 from the web page
    var text = document.getElementById("question");
    
    //make a random whole number 1-12
    var n1 = Math.floor(Math.random() * 12 + 1)
    var n2 = Math.floor(Math.random() * 12 + 1)

    if (mode == "easy") {
        console.log("making easy questions")
        n2 = Math.floor(Math.random() * 6 + 1)
    }else{
        console.log("making hard questions")
        n2 = Math.floor(Math.random() * 6 + 7)
    }






    answer = n1 * n2
    console.log(answer)
    
    //display the question
    text.innerHTML = n1 + " x " + n2 + " = "
}


window.onload = function (){  
    mode = localStorage.getItem("mode");
    console.log(mode)
    newQuestion();
}
    function checkAnswer(){
    var a = document.getElementById("answer").value;
    console.log(a)
    console.log(answer)
    if (a == answer){
            console.log("Correct")
            document.getElementById("message").innerHTML = "Correct"
    }else{
            console.log("Incorrect")
            document.getElementById("message").innerHTML = "Incorrect"
    }
    document.getElementById("answer").value = ""
    newQuestion();
    }