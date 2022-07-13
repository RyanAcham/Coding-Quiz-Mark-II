//variables
let scores = document.querySelector("#scores");
let timer = document.querySelector("#timer");
let container = document.querySelector("#container");
let title = document.querySelector("#title");
let content = document.querySelector("#content");
let start = document.querySelector("#start");
let answer = document.querySelector("#answer");

let optionList = [];
let currentQues = 0;
let score = 0;
let timeLeft = 61;
let isQuizOngoing = false;
let leaderboard = [];
let initials = "";
let isClearingAnswer = false;
let clearingAnswerCode = 0;
let isCorrect = false;

class Question {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}

let questionList = [];

const options1 = ["1. Compiling", "2. Executing", "3. Debugging", "4. Scanning"];
const question1 = new Question("_______ is the process of finding errors and fixing them within a program.", options1, "3. Debugging");
questionList.push(question1);

const options2 = ["1. Alt - C", "2. Shift - C", "3. Esc", "4. Ctrl - C"];
const question2 = new Question("Which command will stop an infinite loop?", options2, "4. Ctrl - C");
questionList.push(question2);

const options3 = ["1. Local variables", "2. CSS selectors", "3. Functions", "4. Names"];
const question3 = new Question("What parameters can be passed into the query selector function?", options3, "2. CSS selectors");
questionList.push(question3);

const options4 = ["1. How the program will accomplish the task", "2. What the task is that the program must perform", "3. How to divide the task into subtasks", "4. How to test the program when it is done"];
const question4 = new Question("During program development, software requirements specify", options4, "2. What the task is that the program must perform");
questionList.push(question4);

const options5 = ["1. add()", "2. push()", "3. concat()", "4. none of the above"];
const question5 = new Question("Which of the following functions can add an element to the end of an array? ", options5, "2. push()");
questionList.push(question5);

const options6 = ["1. Quotes", "2. Curly braces", "3. Parenthesis", "4. Square braces"];
const question6 = new Question("What syntax wraps around strings?", options6, "1. Quotes");
questionList.push(question6);

function init() {
    start.addEventListener("click", questionLoop);
    scores.addEventListener("click", showScores);
}