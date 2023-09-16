const questionElement = document.getElementById("question");
const optionsElement = document.getElementbyId("options");

let currentQuestionIndex = 0;

//A function to index the questions. Getting each question element and setting it to the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.questionText; 
}


currentQuestion.options.forEach((optionText, index) => {
const optionElement = document.createElement("div"); 
optionElement.textContent = options; 
optionElement.addEventListener("click", () => checkAnswer(options)); 
optionsElement.appendChild(optionsElement); 
    
});


const questions = [

{
    questionText: "What does the DOM stand for in Javascript?",
    options: {
    a: "Document Object Model",
    b: "Dynamic Object Manipulation",
    c: "Data Output Mechanism", 
    d: "Document Ordering Model",
    },
    correctAnswer: "a",
},
{
    questionText:"Which keyword is used to declare a variable in Javascript with block scope?",
    options: {
        a: "var",
        b: "let",
        c: "const",
        d: "function",
    },
    correctAnswer: "b",
}
{
    questionText:"What does NaN in JavaScript stand for?",
    options: {
        a:"Not a number",
        b:"Negative and Negative",
        c:"Null and None",
        d:"No Argument Needed"
    },
    correctAnswer: "a",
}
{
    questionText:"What is the purpose of the addEventListener method in Javascript?",
    options: {
        a:"to perform mathematical caculations",
        b:"to add styles to HTML elements",
        c:"to handle events like clicks and keypresses",
        d:"to create new HTML elements"
    },
    correctAnswer: "c",
}
{
    questionText:"What is the purpose of the typeof operator in Javascript?",
    options: {
        a:"to check if a variable is defined",
        b:"to determine the data type of a value",
        c:"to convert a string to a number",
        d:"to create a new variable",
    },
    correctAnswer: "b",
}
{
    questionText:"Which of the following is used to iterate over the properties of an object in JavaScript?",
    options: {
        a:"for loop",
        b:"while loop",
        c:"forEach loop",
        d:"for...in loop",
    },
    correctAnswer: "d",
}
{
    questionText:"What is the purpose of the parseInt function in JavaScript?",
    options: {
        a:"to check if a string is empty",
        b:"to convert a string to an integer",
        c:"to round a floating-point number",
        d:"to add two numbers together"
    },
    correctAnswer: "b",
}

];

