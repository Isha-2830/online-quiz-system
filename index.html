const questions = [
{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"Home Text Markup Language"
],
answer: 0
},
{
question: "Which language is used to style a webpage?",
options: ["Python", "CSS", "Java", "C++"],
answer: 1
},
{
question: "Which tool is used for version control?",
options: ["Git", "Paint", "Calculator", "Notepad"],
answer: 0
},
{
question: "What is GitHub mainly used for?",
options: [
"Editing videos",
"Hosting and collaborating on code",
"Playing games",
"Creating presentations only"
],
answer: 1
},
{
question: "What is Jenkins commonly used for?",
options: [
"Photo editing",
"Writing HTML only",
"Automating build and test workflows",
"Browsing websites"
],
answer: 2
}
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let answered = false;

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", startQuiz);

function startQuiz() {
currentQuestion = 0;
score = 0;
timeLeft = 60;

```
homeScreen.classList.add("hidden");
resultScreen.classList.add("hidden");
quizScreen.classList.remove("hidden");

showQuestion();
updateTimer();

clearInterval(timerInterval);
timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
        finishQuiz();
    }
}, 1000);
```

}

function showQuestion() {
answered = false;

```
const item = questions[currentQuestion];

questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

questionElement.textContent = item.question;
optionsElement.innerHTML = "";
feedbackElement.textContent = "";
nextButton.classList.add("hidden");

progressBar.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

item.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index, button));

    optionsElement.appendChild(button);
});
```

}

function selectAnswer(selectedIndex, selectedButton) {
if (answered) return;

```
answered = true;

const correctIndex = questions[currentQuestion].answer;
const optionButtons = optionsElement.querySelectorAll("button");

optionButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === correctIndex) {
        button.classList.add("correct");
    }
});

if (selectedIndex === correctIndex) {
    score++;
    feedbackElement.textContent = "Correct answer!";
} else {
    selectedButton.classList.add("incorrect");
    feedbackElement.textContent = "Incorrect. The correct answer is highlighted.";
}

progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

nextButton.textContent =
    currentQuestion === questions.length - 1
        ? "See Results"
        : "Next Question";

nextButton.classList.remove("hidden");
```

}

function nextQuestion() {
if (currentQuestion < questions.length - 1) {
currentQuestion++;
showQuestion();
} else {
finishQuiz();
}
}

function updateTimer() {
timerElement.textContent = `Time: ${timeLeft} seconds`;
}

function finishQuiz() {
clearInterval(timerInterval);

```
quizScreen.classList.add("hidden");
resultScreen.classList.remove("hidden");

document.getElementById("score").textContent =
    `Your Score: ${score} / ${questions.length}`;

document.getElementById("result-message").textContent =
    score === questions.length
        ? "Excellent! You answered every question correctly!"
        : "Good effort! Keep practising to improve your score.";
```

}
