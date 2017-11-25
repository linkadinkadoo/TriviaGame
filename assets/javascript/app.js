// game starts with a start screen, which is never seen again after the player presses the button

// a function loads the first question set object from the array

// if user clicks on answer with ID "correct", then wins++, play congratulations clip

// else timer runs out, losses--, play loser clip

// else losses--, play loser clip

// game moves to next question after 3 seconds

// After game is over (10 questions), there is a start over button that does NOT reload the page, but restarts the game

window.onload = function () {
    var unanswered;
    var wins;
    var losses;
    // substitue the [0] in qArray for a variable
    var s = 0;

    var qArray = [
        {
            question: "'Porkins', of Star Wars Episode IV fame, also played what semi-famous character?",
            a: "The guy who says 'Top men', in Indiana Jones",
            b: "'Jiminy Glick's' father",
            c: "John Goodman's character's brother on the Rosanne Show",
            d: "A body double for Fat Bastard"
        },
        {
            question: "In a climatic scene in PI, the 1998 Sundance Award-Winning indie film, the lead character drills a hole into his head in order to alleviate pressure. How did they acheive this special effect?",
            a: "CGI",
            b: "A rubber head",
            c: "He actually drilled into his own head",
            d: "Quick editing cuts"
        },
        {
            question: "In 'The Lord of the Rings: The Two Towers', Legolas grabs a shield, jumps on it, and slides down a staircase while effortlessly killing Orcs with his bow and arrows. The idea for this rediculous sequence came from:",
            a: "Peter Jackson (Director)",
            b: "Andrew Lesnie (Cinematographer)",
            c: "Elijah Wood (Frodo)",
            d: "Orlando Bloom (Legolas)"
        },
        {
            question: "Robert Rodriguez, director of 'Spy Kids' and 'Sin City', financed his first film by:",
            a: "Taking a second job delivering Pizza",
            b: "Selling his body to science",
            c: "Working as a male stripper",
            d: "Working on a fishing boat in Alaska"
        },
        {
            question: "Acadamy Award winning screenwriter William Goldman, likes to get in the screenplay writing mood by:",
            a: "Having a glass of wine",
            b: "Having a beer",
            c: "Reading the sports pages",
            d: "Reading the obituary column"
        }
    ];

    // start button kicks of timer and loads the questions
    $(".start").on("click", function () {
        time();
        questionsStart();
    });

    // countdown timer
    function time() {
        var countDown = 30;
        var stopWatch = setInterval(stopIt, 1000);
        function stopIt() {
            if (countDown === 0) {
                clearInterval(stopWatch);
                unanswered++;
                document.getElementById("reveal").innerHTML = "Time's up! The correct answer is: " + qArray[s].a;
            }
            else {
                countDown--;
                document.getElementById("timer").innerHTML = countDown;
            }
        }
    };

    // this function loads the questions into the html from the qArray
    function questionsStart() {
        // debugger
        for (i=0; length.qArray; i++){
        
            // load the first object's info into the html
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
        
            // listen for a click on a button
            $("#a").on("click", function () {
                wins = wins++;
                document.getElementById("wins").innerHTML = wins;
                console.log("wins is: " + wins);
                s = s++;
            });

            $("#b #c #d").on("click", function () {
                losses = losses++;
                document.getElementById("losses").innerHTML = losses;
                console.log("losses is: " + losses);
                s = s++;
            });
        
        }
    // deliver the appropriate message 
    };
        
    
};