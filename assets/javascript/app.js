//arrays?
answerlog.one = [];
answerlog.two = [];
answerlog.three = [];
answerlog.four = [];
//window onload
 //display trivia game title and start button
function open() {

  $("#answer1") = answerlog.one 
  $("#answer2") = answerlog.two
  $("#answer3") = answerlog.three
  $("#answer4") = answerlog.four
  $("#start") = start.number
  $("#done") = (rightWrong);

}

//global variable for interval/timer
setIntervalId();
var startTimer
gameTime();
var number = 30;

 //start button displays timer/questions and starts timer
   //keeps title, so one div holds timer/questions .html to replace start button
$("start").on("click") {

  var answerlog = [one, two, three, four];

  startTimer = setIntervalId(decrement, 1000);

  gametime();

},

$("#done").on("click") {

  stop();
}

  function (gameTime) {

    if (answerlog.one === [a]); {

      correct++;

    } else (answerlog.one === [b, c, d]); {

      incorrect++;

    } else if {

      unanswered++;
    }

    if (answerlog.two === [c]); {

      correct++;

    } else (answerlog.two === [a, b, d]); {

      incorrect++;

    } else if {

      unanswered++;
    }

    if (answerlog.three === [d]); {

      correct++;

    } else (answerlog.three === {a, b, c}); {

      incorrect++;

    } else if {

      unanswered++;
    }

    if (answerlog.four === [c]); {

      correct++;

    } else (answerlog.four === [a, b, d]); {

      incorrect++;

    } else if {

      unanswered++;
    }

},

function(decrement) {

number--;

$("#start").html("<h2>" + start.number + "</h2>");

//  Once number hits zero...
if (number === 0) {

stop();

},

function(stop) {

  clearInterval(setIntervalId);

rightWrong();

},

var correct = 0;
var inorrect = 0;
var unanswered = 0;

function(rightWrong) {

  $("#gamediv").html = ("<h1>" + "Correct Answers =" + correct + "</h1>");

  $("#gamediv").html = ("<h1>" + "Incorrect Answers =" + inorrect + "</h1>");

  $("#gamediv").html = ("<h1>" + "Unanswered =" + unanswered + "</h1>");

},



//done button
  //stop the timer and add .html to show "done message" and display answered/unanswered/wrong answers
   //if else statements to record right and wrong answers