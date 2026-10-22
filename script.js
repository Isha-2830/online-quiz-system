const LANGUAGES = ["Python", "Java", "C", "C++", "HTML", "JavaScript"];
const QUESTIONS_PER_SET = 10;
const TOTAL_SETS = 10;
const QUIZ_TIME = 120;

const questionBank = {
    Python: [
        {
            question: "Which keyword defines a function in Python?",
            options: ["func", "def", "function", "define"],
            answer: 1
        },
        {
            question: "Which data type stores True or False?",
            options: ["int", "str", "bool", "list"],
            answer: 2
        },
        {
            question: "Which symbol starts a single-line comment?",
            options: ["//", "#", "/*", "--"],
            answer: 1
        },
        {
            question: "Which collection stores ordered, changeable items?",
            options: ["tuple", "list", "frozenset", "None"],
            answer: 1
        },
        {
            question: "What is the result of 3 ** 2?",
            options: ["6", "9", "5", "8"],
            answer: 1
        },
        {
            question: "Which function displays output?",
            options: ["input()", "show()", "print()", "display()"],
            answer: 2
        },
        {
            question: "Which keyword starts a conditional statement?",
            options: ["if", "when", "check", "caseonly"],
            answer: 0
        },
        {
            question: "Which function returns the number of items?",
            options: ["countall()", "size()", "len()", "length()"],
            answer: 2
        },
        {
            question: "Which brackets create a dictionary?",
            options: ["[]", "()", "{}", "<>"],
            answer: 2
        },
        {
            question: "Which keyword is used to create a class?",
            options: ["object", "class", "struct", "new"],
            answer: 1
        }
    ],

    Java: [
        {
            question: "Which keyword declares a class in Java?",
            options: ["define", "class", "struct", "create"],
            answer: 1
        },
        {
            question: "Which method is the usual Java program entry point?",
            options: ["start()", "run()", "main()", "init()"],
            answer: 2
        },
        {
            question: "Which type stores whole numbers?",
            options: ["int", "boolean", "char[]", "String"],
            answer: 0
        },
        {
            question: "Which keyword creates an object?",
            options: ["make", "this", "new", "object"],
            answer: 2
        },
        {
            question: "Which symbol ends most Java statements?",
            options: [":", ".", ";", ","],
            answer: 2
        },
        {
            question: "Which keyword inherits a class?",
            options: ["implements", "extends", "inherits", "superclass"],
            answer: 1
        },
        {
            question: "Which type represents true or false?",
            options: ["bool", "bit", "boolean", "logic"],
            answer: 2
        },
        {
            question: "Which package is commonly used for Scanner input?",
            options: ["java.io", "java.util", "java.net", "java.sql"],
            answer: 1
        },
        {
            question: "Which keyword prevents a class from being extended?",
            options: ["static", "private", "final", "constant"],
            answer: 2
        },
        {
            question: "Which statement prints text with a newline?",
            options: [
                "System.out.print()",
                "System.out.println()",
                "Console.write()",
                "print.line()"
            ],
            answer: 1
        }
    ],

    C: [
        {
            question: "Which function is commonly the entry point of a C program?",
            options: ["start()", "main()", "begin()", "run()"],
            answer: 1
        },
        {
            question: "Which header declares printf()?",
            options: ["stdlib.h", "string.h", "stdio.h", "math.h"],
            answer: 2
        },
        {
            question: "Which format specifier is commonly used for an int in printf()?",
            options: ["%c", "%d", "%s", "%f"],
            answer: 1
        },
        {
            question: "Which operator obtains a variable's address?",
            options: ["*", "&", "%", "#"],
            answer: 1
        },
        {
            question: "Which loop checks its condition before each iteration?",
            options: ["while", "do-while only", "switch", "goto"],
            answer: 0
        },
        {
            question: "Which keyword declares an integer variable?",
            options: ["integer", "number", "int", "whole"],
            answer: 2
        },
        {
            question: "Which symbol ends a C statement?",
            options: [":", ";", ".", ","],
            answer: 1
        },
        {
            question: "Which operator tests equality?",
            options: ["=", "==", "!=", "<>"],
            answer: 1
        },
        {
            question: "Which keyword returns a value from a function?",
            options: ["send", "break", "return", "exitloop"],
            answer: 2
        },
        {
            question: "Which preprocessor directive includes a header?",
            options: ["#include", "#definefile", "import", "using"],
            answer: 0
        }
    ],

    "C++": [
        {
            question: "Which stream is commonly used for console output?",
            options: ["cin", "cout", "input", "writein"],
            answer: 1
        },
        {
            question: "Which header provides cout?",
            options: ["<stdio.h>", "<iostream>", "<string.h>", "<math.h>"],
            answer: 1
        },
        {
            question: "Which keyword declares a class?",
            options: ["object", "structonly", "class", "define"],
            answer: 2
        },
        {
            question: "Which operator accesses a member through an object?",
            options: [".", "#", "@", ":"],
            answer: 0
        },
        {
            question: "Which keyword creates a new dynamic object?",
            options: ["create", "malloc", "new", "object"],
            answer: 2
        },
        {
            question: "Which feature lets functions share a name with different parameters?",
            options: ["Overloading", "Looping", "Casting", "Indexing"],
            answer: 0
        },
        {
            question: "Which keyword can be used for inheritance?",
            options: ["extends", "inherits", "using", "public"],
            answer: 3
        },
        {
            question: "Which operator is used for stream insertion?",
            options: ["<<", ">>", "==", "::"],
            answer: 0
        },
        {
            question: "Which keyword declares a constant variable?",
            options: ["fixed", "const", "constant", "final"],
            answer: 1
        },
        {
            question: "Which symbol ends most C++ statements?",
            options: [".", ":", ";", ","],
            answer: 2
        }
    ],

    HTML: [
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
            question: "Which tag creates a paragraph?",
            options: ["<h1>", "<p>", "<div1>", "<para>"],
            answer: 1
        },
        {
            question: "Which tag creates a hyperlink?",
            options: ["<link>", "<href>", "<a>", "<url>"],
            answer: 2
        },
        {
            question: "Which tag inserts an image?",
            options: ["<image>", "<picture>", "<img>", "<src>"],
            answer: 2
        },
        {
            question: "Which attribute specifies an image file?",
            options: ["href", "src", "altname", "link"],
            answer: 1
        },
        {
            question: "Which heading tag is the largest by default?",
            options: ["<h6>", "<head>", "<h1>", "<heading>"],
            answer: 2
        },
        {
            question: "Which tag creates an unordered list?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            answer: 1
        },
        {
            question: "Which tag creates a table row?",
            options: ["<td>", "<th>", "<tr>", "<table-row>"],
            answer: 2
        },
        {
            question: "Which declaration identifies an HTML5 document?",
            options: [
                "<html5>",
                "<!DOCTYPE html>",
                "<document html>",
                "<doctype>"
            ],
            answer: 1
        },
        {
            question: "Which tag defines the page's main content area?",
            options: ["<main>", "<bodytext>", "<content>", "<sectionmain>"],
            answer: 0
        }
    ],

    JavaScript: [
        {
            question: "Which keyword declares a block-scoped variable that can be reassigned?",
            options: ["const", "let", "fixed", "define"],
            answer: 1
        },
        {
            question: "Which method writes a message to the browser console?",
            options: ["console.log()", "print.console()", "write.log()", "echo()"],
            answer: 0
        },
        {
            question: "Which operator compares values and types?",
            options: ["=", "==", "===", "!="],
            answer: 2
        },
        {
            question: "Which symbol starts a single-line comment?",
            options: ["#", "//", "<!--", "**"],
            answer: 1
        },
        {
            question: "Which method selects an element by its ID?",
            options: [
                "document.queryAll()",
                "document.getElementById()",
                "document.getClass()",
                "window.findId()"
            ],
            answer: 1
        },
        {
            question: "Which value represents an intentional absence of a value?",
            options: ["undefined only", "null", "false", "NaN only"],
            answer: 1
        },
        {
            question: "Which array method adds an item to the end?",
            options: ["shift()", "pop()", "push()", "slice()"],
            answer: 2
        },
        {
            question: "Which keyword declares a function?",
            options: ["func", "function", "define", "method"],
            answer: 1
        },
        {
            question: "Which event commonly occurs when a user clicks an element?",
            options: ["onload", "onchange", "onclick", "onopen"],
            answer: 2
        },
        {
            question: "Which method converts a JSON string into a JavaScript value?",
            options: [
                "JSON.stringify()",
                "JSON.parse()",
                "JSON.convert()",
                "JSON.read()"
            ],
            answer: 1
        }
    ]
};

const languageScreen = document.getElementById("language-screen");
const setsScreen = document.getElementById("sets-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const languageList = document.getElementById("language-list");
const setList = document.getElementById("set-list");
const selectedLanguageTitle = document.getElementById("selected-language");

const questionNumber = document.getElementById("question-number");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");

const scoreElement = document.getElementById("score");
const resultMessage = document.getElementById("result-message");

let selectedLanguage = "";
let selectedSet = 1;
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = QUIZ_TIME;
let timerInterval = null;

function showScreen(screen) {
    [languageScreen, setsScreen, quizScreen, resultScreen]
        .forEach(item => item.classList.add("hidden"));

    screen.classList.remove("hidden");
}

function shuffle(items) {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function showLanguages() {
    clearInterval(timerInterval);
    showScreen(languageScreen);
}

function chooseLanguage(language) {
    selectedLanguage = language;

    selectedLanguageTitle.textContent = `${language} Quiz Sets`;
    setList.innerHTML = "";

    for (let set = 1; set <= TOTAL_SETS; set++) {
        const button = document.createElement("button");
        button.className = "set-card";
        button.textContent = `Set ${set} — 10 Questions`;

        button.addEventListener("click", () => startQuiz(set));
        setList.appendChild(button);
    }

    showScreen(setsScreen);
}

function startQuiz(setNumber) {
    selectedSet = setNumber;
    currentQuestion = 0;
    score = 0;
    answered = false;
    timeLeft = QUIZ_TIME;

    /*
     * The initial bank has 10 sample questions per language.
     * Reuse is temporary until additional unique questions are added.
     */
    const bank = questionBank[selectedLanguage];

    currentQuestions = Array.from(
        { length: QUESTIONS_PER_SET },
        (_, index) => ({ ...bank[index % bank.length] })
    );

    // Keep the set's question order stable while answering it.
    showScreen(quizScreen);
    showQuestion();

    clearInterval(timerInterval);
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function showQuestion() {
    answered = false;

    const item = currentQuestions[currentQuestion];

    questionNumber.textContent =
        `Set ${selectedSet} • Question ${currentQuestion + 1} of ${QUESTIONS_PER_SET}`;

    questionElement.textContent = item.question;
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.classList.add("hidden");

    progressBar.style.width =
        `${(currentQuestion / QUESTIONS_PER_SET) * 100}%`;

    item.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const correctIndex = currentQuestions[currentQuestion].answer;
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach((button, index) => {
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
        feedbackElement.textContent =
            `Incorrect. Correct answer: ${currentQuestions[currentQuestion].options[correctIndex]}`;
    }

    progressBar.style.width =
        `${((currentQuestion + 1) / QUESTIONS_PER_SET) * 100}%`;

    nextButton.textContent =
        currentQuestion === QUESTIONS_PER_SET - 1
            ? "See Results"
            : "Next Question";

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    if (!answered) return;

    if (currentQuestion < QUESTIONS_PER_SET - 1) {
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
    progressBar.style.width = "100%";

    showScreen(resultScreen);

    scoreElement.textContent =
        `Your Score: ${score} / ${QUESTIONS_PER_SET}`;

    if (score === QUESTIONS_PER_SET) {
        resultMessage.textContent = "Excellent! You answered every question correctly!";
    } else if (score >= 7) {
        resultMessage.textContent = "Great work! Keep practising to improve further.";
    } else {
        resultMessage.textContent = "Good effort! Review the concepts and try again.";
    }
}

languageList.addEventListener("click", event => {
    const button = event.target.closest("[data-language]");

    if (button) {
        chooseLanguage(button.dataset.language);
    }
});

document.getElementById("back-languages")
    .addEventListener("click", showLanguages);

nextButton.addEventListener("click", nextQuestion);

document.getElementById("retry-btn")
    .addEventListener("click", () => startQuiz(selectedSet));

document.getElementById("choose-set-btn")
    .addEventListener("click", () => chooseLanguage(selectedLanguage));

document.getElementById("choose-language-btn")
    .addEventListener("click", showLanguages);
