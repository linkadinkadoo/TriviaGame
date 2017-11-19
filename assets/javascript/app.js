// create objects. each object will have a question and 4 possible answers. one of the answers will have ID of Correct

// create countdown timer

// create start button

// create variable for wins

// create variable for losses


// game starts with a start screen, which is never seen again after the player presses the button

// a function loads the first question set object

// 30 second timer starts

// if user clicks on answer with ID "correct", then wins++, play congratulations clip

//else timer runs out, losses--, play loser clip

// else losses--, play loser clip

// game moves to next question after 3 seconds

// After game is over (10 questions), there is a start over button that does NOT reload the page, but restarts the game

var timer;
var unanswered;
var wins;
var losses;

var question1 = {
    question:"'Porkins', of Star Wars Episode IV fame, also played what semi-famous character?",
    a:"The guy who says 'Top men', in Indiana Jones",
    b:"'Jiminy Glick's' father",
    c:"John Goodman's character's brother on the Rosanne Show",
    d:"A body double for Fat Bastard"
};

var question2 = {
    question: "In a climatic scene in PI, the 1998 Sundance Award Winning indie film, the lead character drills a hole into his head in order to alleviate pressure. How did they acheive this special effect?",
    a: "CGI",
    b: "A rubber head",
    c: "He actually drilled into his own head",
    d: "Quick editing cuts"
};

var question3 = {
    question: "In 'The Lord of the Rings: The Two Towers', Legolas grabs a shield, jumps on it, and slides down a staircase while effortlessly killing Orcs with his bow and arrows. The idea for this rediculous sequence came from:",
    a: "Peter Jackson (Director)",
    b: "Andrew Lesnie (Cinematographer)",
    c: "Elijah Wood (Frodo)",
    d: "Orlando Bloom (Legolas)"
}

var question4 = {
    question: "Robert Rodriguez, director of 'Spy Kids' and 'Sin City', financed his first film by:",
    a: "Taking a second job delivering Pizza",
    b: "Selling his body to science",
    c: "Working as a male stripper",
    d: "Working on a fishing boat in Alaska"
};

var question5 = {
    question: "Acadamy Award winning screenwriter William Goldman, likes to get in the screenplay writing mood by:",
    a: "Having a glass of wine",
    b: "Having a beer",
    c: "Reading the sports pages",
    d: "Reading the obituary column"
}

function startButton(){
    var thirtySeconds = 30,
    display = document.querySelector('#time');
    startTimer(thirtySeconds, display);
}

// timer function modified from stack overflow
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function ranOuttaTime(){
    unanswered++;
    document.getElementById("reveal").innerHTML = "Time's up! The correct answer is: " + question1.a;
}
function questionsStart(){
    // load the first object's info into the html
    document.getElementById("game").innerHTML =
    question1.question;
    document.getElementById("a").innerHTML =
    question1.a;
    document.getElementById("b").innerHTML =
    question1.b;
    document.getElementById("c").innerHTML =
    question1.c;
    document.getElementById("d").innerHTML =
    question1.d;
    // start the timer
    setTimeout(ranOuttaTime, 90000);
    // listen for a click on a button
    $("#a").on("click", function () {
        wins = wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log("wins is: " + wins);
    });

    $("#b #c #d").on("click", function () {
        losses = losses++;
        document.getElementById("losses").innerHTML = losses;
        console.log("losses is: " + losses);
    });

    // deliver the appropriate message and increment wins/losses
};