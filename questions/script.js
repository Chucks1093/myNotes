import data from "../data/cedr.json"
const courseContainer = document.querySelector('main');


function createQuizUI(question, answer) {
     const quizBox = document.createElement('article');
     quizBox.classList.add('course-question');
     const questionBox = document.createElement('question');
     questionBox.classList.add('question');
     const qText = document.createElement('p');
     qText.innerHTML = question;
     const showIcon = document.createElement('img');
     showIcon.setAttribute("src", "/plus-circle.svg");
     showIcon.setAttribute("alt", "showBtn");
     questionBox.append(qText, showIcon);
     const answerBox = document.createElement('answer');
     answerBox.classList.add('answer');
     answerBox.innerHTML = answer;
     quizBox.append(questionBox, answerBox);
     courseContainer.appendChild(quizBox);
}

data["Chapter 1"].map(quiz=> {
     createQuizUI(quiz.question, quiz.answer)
})