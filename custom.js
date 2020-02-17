let shuffledQuestions, currentQuestionIndex //undefined for functions
const startButton =document.getElementById('start-btn')

const nextButton =document.getElementById('next-btn')

const questionContainerElement =document.getElementById('question-container')

const questionElement = document.getElementById('question');

const answerButtonsElement = document.getElementById('answr-buttons')

startButton.addEventListener('click', startGame)

function startGame(){


shuffledQuestions = questions.sort(() =>Math.random() - .5) //shuffles questions in random order.
currentQuestionIndex = 0;//to start from zero
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
questionElement.innerText = question.question;
question.answers.forEach(answer =>{   //loops trough questions
const button = document.createElement('button')
button.InnerText = answer.text;
button.classList.add('btn');
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer);
answerButtonsElement.appendChild(button);
})
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(){
 const selectButton = e.target;
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach()

}
const questions = [

{
    question: "Who is Luke's father?",
    answers: [
        {text: 'Anakin Skywalker', correct: true},
        {text: 'Sheev Palpatine', correct: false},
        {text: 'Obi wan Kenobi', correct: false},
        {text: 'Darth Maul', correct: false}

    ]
}


]