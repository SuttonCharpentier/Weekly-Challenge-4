const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<scr>",
        correct: "a",
    },
    {
        question: "What is an array used for?",
        a: "store multiple values in a single variable",
        b: "store a single value in multiple variables",
        c: "store a variable in a value",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "How do you create a function?",
        a: "function:myFunction()",
        b: "function=myFunction()",
        c: "function myFunction()",
        d: "myFunction():function",
        correct: "c",
    },
    {
        question: "How do you call a function named myFunction",
        a: "call myFunction()",
        b: "myFunction()",
        c: "call function myFunction",
        d: "Call.myFunction()",
        correct: "b",
    },
    {
        question: "What can you store in an array?",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correct: "d",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');
const quizContainer = document.querySelector('.quiz-container')

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
};

function deselectAnswers() {

    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected () {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
         if (answer === quizData[currentQuiz].correct) {
             score++
             console.log (score)
         }
        currentQuiz++
        console.log (currentQuiz)

        if (currentQuiz < quizData.length ) {
            loadQuiz()
        } else {
            quizContainer.innerHTML= `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onClick="location.reload">Reload</button>
            `
        }
    }
});