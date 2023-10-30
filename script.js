document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const timer = document.getElementById("timer");
    const timeLeft = document.getElementById("time-left");
    const submitButton = document.getElementById("submit-button");
    const finalScore = document.getElementById("final-score");
    const saveScoreButton = document.getElementById("save-score-button");
    const initialsInput = document.getElementById("initials");

    const questions = [
        {
            questionText: "What does the DOM stand for in Javascript?",
            options: [
                "Document Object Model",
                "Dynamic Object Manipulation",
                "Data Output Mechanism",
                "Document Ordering Model",
            ],
            correctAnswer: "Document Object Model",
        },
        {
            questionText: "Which keyword is used to declare a variable in Javascript with block scope?",
            options: ["var", "let", "const", "function"],
            correctAnswer: "let",
        },
        {
            questionText: "What does NaN in JavaScript stand for?",
            options: [
                "Not a number",
                "Negative and Negative",
                "Null and None",
                "No Argument Needed",
            ],
            correctAnswer: "Not a number",
        },
        {
            questionText: "What is the purpose of the addEventListener method in Javascript?",
            options: [
                "to perform mathematical calculations",
                "to add styles to HTML elements",
                "to handle events like clicks and keypresses",
                "to create new HTML elements",
            ],
            correctAnswer: "to handle events like clicks and keypresses",
        },
        {
            questionText: "What is the purpose of the typeof operator in Javascript?",
            options: [
                "to check if a variable is defined",
                "to determine the data type of a value",
                "to convert a string to a number",
                "to create a new variable",
            ],
            correctAnswer: "to determine the data type of a value",
        },
        {
            questionText: "Which of the following is used to iterate over the properties of an object in JavaScript?",
            options: ["for loop", "while loop", "forEach loop", "for...in loop"],
            correctAnswer: "for...in loop",
        },
        {
            questionText: "What is the purpose of the parseInt function in JavaScript?",
            options: [
                "to check if a string is empty",
                "to convert a string to an integer",
                "to round a floating-point number",
                "to add two numbers together",
            ],
            correctAnswer: "to convert a string to an integer",
        },
    ];

    let timerInterval;
    let time = 60;
    let currentQuestion = 0;
    let score = 0;

    startButton.addEventListener("click", function() {
        startQuiz();
    });

    function startQuiz() {
        startButton.style.display = "none";
        questionContainer.style.display = "block";

        // Start the timer
        timerInterval = setInterval(function() {
            if (time > 0) {
                time--;
                timeLeft.textContent = time;
            } else {
                endQuiz();
            }
        }, 1000);

        showQuestion(currentQuestion);
    }

    function showQuestion(questionNumber) {
        if (questionNumber < questions.length) {
            const question = questions[questionNumber];
            document.querySelector("#question-container h2").textContent = `Question ${questionNumber + 1}`;
            document.querySelector("#question-container p").textContent = question.questionText;

            // Create and populate answer options
            const answerOptions = document.getElementById("answer-options");
            answerOptions.innerHTML = "";
            for (let i = 0; i < question.options.length; i++) {
                const option = document.createElement("input");
                option.type = "radio";
                option.name = "answer";
                option.value = question.options[i];
                const label = document.createElement("label");
                label.textContent = question.options[i];
                answerOptions.appendChild(option);
                answerOptions.appendChild(label);
            }
        } else {
            endQuiz();
        }
    }

    submitButton.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            const correctAnswer = questions[currentQuestion].correctAnswer;
            if (userAnswer === correctAnswer) {
                resultContainer.textContent = "Correct!";
                score++;
            } else {
                resultContainer.textContent = "Incorrect!";
                time -= 10; // Subtract time for incorrect answer
            }

            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            } else {
                endQuiz();
            }
        }
    });

    function endQuiz() {
        clearInterval(timerInterval);
        questionContainer.style.display = "none";
        finalScore.textContent = score;
        document.getElementById("game-over-container").style.display = "block";
    }

    saveScoreButton.addEventListener("click", function() {
        const initials = initialsInput.value;
        //file save 
    });
});
