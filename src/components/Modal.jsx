import { Fragment, useEffect, useRef } from "react";
import QuizInfo from "./QuizInfo";
import courses from "../courses/courses";
import { useState } from "react";

const file = Object.keys(courses);
let sections = [];
let totalTopics = 0;
let totalQuestions = 0;
file.forEach(topic => {
    const val = Object.values(courses[topic])
    totalTopics += val[1].length;
    sections = sections.concat(val[1])
})

sections.forEach(section => {
    totalQuestions += section.notes.length;
});





function Modal() {
    const [visible, setVisible] = useState(false);
    const modalCover = useRef();
    
    const openModal =(e) => {
        const modalCover = e.currentTarget;
        const modal = e.currentTarget.nextElementSibling;
        
        modalCover.style.opacity = 0;
        modal.style.opacity = 0;
        
        setTimeout(()=> {
            modalCover.style.display = "none";
            modal.style.display = "none";
        }, 1000)
    
    }


    return (
        <Fragment>
            <div ref={modalCover} className="message-cover" onClick={openModal}>
            </div>
            <div  className="modal">    
                <div className="show-dev">
                    <img src="/dev.jpeg" alt="dev" className="dev" />
                    <img src="/javascript.svg" alt="javascript.svg" className="lang" />
                </div>
                <p className="dev-name">Anioke Sebastian</p>
                <a href="http://wa.me/+2349030018605">wa.me/+2349030018605</a>
                <p className="message">Hey there, I am a student of the University of Nigeria, Nsukka and I built this simple web application to help students study for the forth comming exam. GoodLuck!</p>
                <div className="quiz-info">
                    <QuizInfo 
                        number={file.length}
                        title={"Courses"} 
                        source={"exam-2"}
                    />
                    <QuizInfo 
                        number={totalQuestions}
                        title={"Questions"} 
                        source={"q-a-1"}
                    />
                    <QuizInfo
                        number={totalTopics}
                        title={"Topics"} 
                        source={"pie-1"}/>
                </div>        
            </div>
        </Fragment>
    )
}

export default Modal;

// import createQuizInfo from "./createQuizInfo";
// import courses from "../data/courses";

// const file = Object.keys(courses);
// let sections = [];
// let totalTopics = 0;
// let totalQuestions = 0;
// file.forEach(topic => {
//      const val = Object.values(courses[topic])
//      totalTopics += val.length;
//      sections = sections.concat(val);
// });
// sections.forEach(section => {
//      totalQuestions += section.length;
// });

// function createDevModal(element){
//      const messageCover = document.createElement("div");
//      messageCover.classList.add('message-cover');
//      const modal = document.createElement("div");
//      modal.classList.add("modal");
//      const showDev = document.createElement("div");
//      showDev.classList.add("show-dev");
//      const dev = document.createElement("img");
//      dev.classList.add("dev");
//      dev.setAttribute("src", "/dev.jpeg");
//      dev.setAttribute("alt", "dev");
//      const langImg = document.createElement("img");
//      langImg.classList.add("lang");
//      langImg.setAttribute("src", "/javascript.svg");
//      langImg.setAttribute("alt", "javascript.svg");
//      showDev.append(dev,langImg);
//      const devName = document.createElement("p");
//      devName.classList.add("dev-name");
//      devName.textContent = "Anioke Sebastian";
//      const whatsappLink = document.createElement("a");
//      whatsappLink.setAttribute("href", "http://wa.me/+2349030018605");
//      whatsappLink.textContent = "wa.me/+2349030018605";
//      const message = document.createElement("p");
//      message.classList.add("message");
//      message.textContent = "Hey there, I am a student of the University of Nigeria, Nsukka and I built this simple web application to help students study for the forth comming exam. GoodLuck!";
//      const quizInfo = document.createElement("quiz-info");
//      quizInfo.classList.add("quiz-info");
//      quizInfo.append(createQuizInfo(file.length,"Courses","exam-2"), createQuizInfo(totalQuestions,"Questions","q-a-1"),createQuizInfo(totalTopics,"Topics","pie-1"));
//      modal.append(showDev, devName, whatsappLink, message, quizInfo);
//      element.appendChild(messageCover);
//      element.appendChild(modal);
// };

