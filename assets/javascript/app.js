// game starts with a start screen, which is never seen again after the player presses the button

// a function loads the first question set object from the array

// else timer runs out, losses--, play loser clip

// else losses--, play loser clip

// game moves to next question after 5 seconds

// After game is over (10 questions), there is a start over button that does NOT reload the page, but restarts the game
var unanswered = 0;
var wins = 0;
var losses = 0;
var s = 0;

$(document).ready(function () {
    var stopWatch;

    var qArray = [
        {
            question: "0. 'Porkins', of Star Wars Episode IV fame, also played what semi-famous character?",
            a: "The guy who says 'Top men', at the end of Indiana Jones",
            b: "'Jiminy Glick's' father",
            c: "John Goodman's brother on the Rosanne Show",
            d: "A body double for Fat Bastard",
            correct: "#a",
            incorrect: "#b, #c, #d",
            answer: "The guy who says 'Top men', at the end of Indiana Jones",
            information: "The actor was William Hootkins, a fan convention favorite."
        },
        {
            question: "1. In a climatic scene in PI, the 1998 Sundance Award-Winning indie film, the lead character drills a hole into his head in order to alleviate pressure. How did they acheive this special effect?",
            a: "CGI",
            b: "A rubber head",
            c: "He actually drilled into his own head",
            d: "Quick editing cuts",
            correct: "#c",
            incorrect: "#a, #b, #d",
            answer: "He actually drilled into his own head",
            information: "On the director's commentary, Darren Aronofsky describes rushing Sean Gullette to the hosipital immediately following the shot."
        },
        {
            question: "2. In 'The Lord of the Rings: The Two Towers', Legolas grabs a shield, jumps on it, and slides down a staircase while effortlessly killing Orcs with his bow and arrows. The idea for this ridiculous sequence came from:",
            a: "Peter Jackson (Director)",
            b: "Andrew Lesnie (Cinematographer)",
            c: "Elijah Wood (Frodo)",
            d: "Orlando Bloom (Legolas)",
            correct: "#b",
            incorrect: "#a, #c, #d",
            answer: "Andrew Lesnie (Cinematographer)",
            information: "Yeah..."
        },
        {
            question: "3. Robert Rodriguez, director of 'Spy Kids' and 'Sin City', financed his first film by:",
            a: "Taking a second job delivering Pizza",
            b: "Selling his body to science",
            c: "Working as a male stripper",
            d: "Working on a fishing boat in Alaska",
            correct: "#b",
            incorrect: "#a, #c, #d",
            answer: "Selling his body to science",
            information: "Rodriguez recounts the arduous tale in his book, 'Rebel without a crew.'"
        },
        {
            question: "4. Acadamy Award winning screenwriter William Goldman likes to get in the screenplay writing mood by:",
            a: "Having a glass of wine",
            b: "Having a beer",
            c: "Reading the sports pages",
            d: "Reading the obituary column",
            correct: "#c",
            incorrect: "#a, #b, #d",
            answer: "Reading the sports pages",
            information: "Goldman is famous for penning 'Butch Cassidy and the Sundance Kid', 'All the President's men', and 'The Princess Bride', among others."
        }
    ];
    // start button kicks of timer and loads the questions
    $(".start").on("click", function () {
        // time();
        questionsStart();
        document.getElementById("startScreen").style.visibility = 'hidden';
        document.getElementById("gameScreen").style.visibility = 'visible';
        // console.log("start button was clicked");
        // console.log("s = " + s);
    });
    function timesUp(){
        document.getElementById("gameScreen").style.visibility = 'hidden';
        document.getElementById("revealScreen").style.visibility = 'visible';
        document.getElementById("answer").innerHTML = "Time's up! The correct answer is: " + qArray[s].answer;
        document.getElementById("info").innerHTML = qArray[s].information;
    }
    // countdown timer
    function time() {
        var countDown = 30;
        stopWatch = setInterval(stopIt, 1000);

        function stopIt() {
            if (countDown === 0) {
                clearInterval(stopWatch);
                timesUp();
                unanswered++;
                console.log("Unanswered is" + unanswered);
            }
            else {
                countDown--;
                document.getElementById("timer").innerHTML = countDown;
            }
        };
    };

    $(".wrapper").on("click", "#a", function() {
        clearInterval(stopWatch);
        if (qArray[s].correct==="#a"){
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's correct! <br>The answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            wins++;
        }
        else {
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's incorrect! <br>The correct answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            losses++;
        }
    });

    $(".wrapper").on("click", "#b", function(){
        clearInterval(stopWatch);
        if (qArray[s].correct==="#b"){
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's correct! <br>The answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            wins++;
        }
        else {
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's incorrect! <br>The correct answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            losses++;
        }
    });

    $(".wrapper").on("click", "#c", function() {
        clearInterval(stopWatch);
        if (qArray[s].correct==="#c"){
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's correct! <br>The answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            wins++;
        }
        else {
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's incorrect! <br>The correct answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            losses++;
        }
    });

    $(".wrapper").on("click", "#d", function(){
        clearInterval(stopWatch);
        if (qArray[s].correct==="#d"){
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's correct! <br>The answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            wins++;
        }
        else {
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'visible';
            document.getElementById("answer").innerHTML = "That's incorrect! <br>The correct answer is: <br>" + qArray[s].answer;
            document.getElementById("info").innerHTML = qArray[s].information;
            losses++;
        }
    });
    // this function loads the questions into the html from the qArray
    function questionsStart() {
        console.log('question start');
        time();
            document.getElementById("q").innerHTML = 
                qArray[s].question;
            document.getElementById("a").innerHTML =
                qArray[s].a;
            document.getElementById("b").innerHTML =
                qArray[s].b;
            document.getElementById("c").innerHTML =
                qArray[s].c;
            document.getElementById("d").innerHTML =
                qArray[s].d;
    };

    $("#nextButton").on("click", function () {
        if (s < (qArray.length - 1)) {
            document.getElementById("gameScreen").style.visibility = 'visible';
            document.getElementById("revealScreen").style.visibility = 'hidden';
            s++;
            console.log("the current s count is " + s);
            questionsStart();
        } else {
            document.getElementById("gameScreen").style.visibility = 'hidden';
            document.getElementById("revealScreen").style.visibility = 'hidden';
            document.getElementById("resultsScreen").style.visibility = 'visible';
            document.getElementById("wins").innerHTML = "Correct: " + wins;
            document.getElementById("losses").innerHTML = "Incorrect: " + losses;
            document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;
        }
    });
});