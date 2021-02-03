function Question(question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correct = correctAnswer;
}

Question.prototype.displayQuestion = function () {
  console.log(`Ques: ${this.question}`);

  for (let i = 0; i <= this.answer.length - 1; i++) {
    console.log(i + ": " + this.answer[i]);
  }
};
// Using closure for score and updating score
function score() {
  let yourScore = 0;
  return function (isCorrect) {
    if (isCorrect) {
      yourScore++;
    }
    return yourScore;
  };
}

let checkScore = score(); // calling score and storing inner closure fn to checkscore

Question.prototype.displaySeprator = function () {
  console.log("-------------------------------");
};
let returnedScore;
Question.prototype.checkAnswer = function (userAns, scoreFromcheckScore) {
  if (userAns === this.correct) {
    console.log("Correct Answer");
    returnedScore = scoreFromcheckScore(true); // basically here we are calling score() with value true/false for isCorrect
  } else if (userAns !== this.correct && userAns == userAns) {
    console.log("Incorrect Answer");
    returnedScore = scoreFromcheckScore(false);
  } else if (userAns !== userAns) {
    console.log("Unattempted");
    returnedScore = scoreFromcheckScore(false);
  }
  this.displaySeprator();
};

let question1 = new Question(
  "Who is the prime minister of India in 2021?",
  ["Modi ji", "Sodi ji"],
  0
);
let question2 = new Question(
  "Who is the supreme commander of Indian armed defence forces?",
  ["Defence Minister", "President", "General of that force"],
  1
);
let question3 = new Question(
  "Indian Army day is celebrated on which date?",
  ["15 August", "16 August", "15 January", "26 January"],
  2
);
let question4 = new Question(
  "Who is the cheif justice of India in 2021?",
  ["Sharad Arvind Bobde", "Ranjan Gogoi"],
  0
);
let que = [question1, question2, question3, question4];

let userAns;

for (let i = 0; i < que.length; i++) {
  if (userAns !== "exit") {
    que[i].displayQuestion();
    userAns = prompt("write your answer");
    que[i].checkAnswer(parseInt(userAns), checkScore);
  }
}
if (userAns === "exit") {
  alert("You can check your total score in now.");
}

console.log(`Your Score is: ${returnedScore}`);
