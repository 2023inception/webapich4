const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const startButton = document.getElementById("startbutton");

let currentQuestionIndex = 0;

const questions = [

    {
        questionText: "What does the DOM stand for in Javascript?",
        options: [
        "Document Object Model",
        "Dynamic Object Manipulation",
        "Data Output Mechanism", 
        "Document Ordering Model",
        ],
        correctAnswer: "a",
    },
    {
        questionText:"Which keyword is used to declare a variable in Javascript with block scope?",
        options: [
            "var",
            "let",
            "const",
            "function",
        ],
        correctAnswer: "b",
    },
    {
        questionText:"What does NaN in JavaScript stand for?",
        options: [
            "Not a number",
            "Negative and Negative",
            "Null and None",
            "No Argument Needed"
        ],
        correctAnswer: "a",
    },
    {
        questionText:"What is the purpose of the addEventListener method in Javascript?",
        options: [
            "to perform mathematical caculations",
            "to add styles to HTML elements",
            "to handle events like clicks and keypresses",
            "to create new HTML elements"
        ],
        correctAnswer: "c",
    },
    {
        questionText:"What is the purpose of the typeof operator in Javascript?",
        options: [
            "to check if a variable is defined",
            "to determine the data type of a value",
            "to convert a string to a number",
            "to create a new variable",
        ],
        correctAnswer: "b",
    },
    {
        questionText:"Which of the following is used to iterate over the properties of an object in JavaScript?",
        options: [
            "for loop",
            "while loop",
            "forEach loop",
            "for...in loop",
        ],
        correctAnswer: "d",
    },
    {
        questionText:"What is the purpose of the parseInt function in JavaScript?",
        options: [
            "to check if a string is empty",
            "to convert a string to an integer",
            "to round a floating-point number",
            "to add two numbers together"
        ],
        correctAnswer: "b",
    },
    
    ];


startButton.addEventListener ('click', ()=> {
loadQuestion(); 
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.questionText;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        // optionElement.type = "radio";
        optionElement.name = "quizOption";
        optionElement.id = `option${index}`;
        optionElement.textContent = option; 
        optionElement.onclick = function(event){checkAnswer(event)};


    // const labelElement = document.createElement('label');
    // labelElement.textContent = option;
    // labelElement.setAttribute('for', `option${index}`);

    optionsElement.appendChild(optionElement);
    // optionsElement.appendChild(labelElement);
}); 
}

function checkAnswer(event) {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.textContent)

    // const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    // if (!selectedOption) {
    //     alert("Please select an option.");
    //     return;
    // }


const userAnswer = event.target.textContent;
const correctAnswer = questions[currentQuestionIndex].correctAnswer;

if (userAnswer === correctAnswer) {
  alert("Correct!");
} else {
  alert(`Incorrect. The correct answer is ${correctAnswer}.`);
}

// Move to the next question or end the quiz if there are no more questions
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
  loadQuestion();
} else {
  alert("Quiz completed!");
}
}



