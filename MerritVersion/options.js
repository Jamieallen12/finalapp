function easymode (){
    localStorage.setItem("mode", "easy");

    console.log("easy")
    window.location.href = "Question.html";
}

function hardmode (){
    localStorage.setItem("mode", "hard");

    console.log("hard")
    window.location.href = "Question.html";
}