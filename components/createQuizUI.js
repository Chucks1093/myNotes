

function createQuizUI(...args) {
     let visiblity = false;
     const quizBox = document.createElement('article');
     quizBox.classList.add('course-question');
     const questionBox = document.createElement('question');
     questionBox.classList.add('question');
     const qText = document.createElement('p');
     qText.innerHTML = args[0];
     const showIcon = document.createElement('img');
     showIcon.setAttribute("src", "/plus-circle.svg");
     showIcon.setAttribute("alt", "showBtn");
     showIcon.addEventListener("click", (e)=> {
          const element  = e.currentTarget;
          visiblity = !visiblity;
          element.src = visiblity? "/minus-circle.svg" : "/plus-circle.svg";
          answerBox.style.display = visiblity? "block" : "none";
     });
     questionBox.append(qText, showIcon);
     const answerBox = document.createElement('answer');
     answerBox.classList.add('answer');
     answerBox.style.display = "none"
     answerBox.innerHTML = args[1];
     quizBox.append(questionBox, answerBox);
     args[2].appendChild(quizBox);
};

export default createQuizUI;