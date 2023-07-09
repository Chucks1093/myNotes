import { Fragment, useEffect, useRef } from "react";
import QuizInfo from "./QuizInfo";
import getLocalStorage from "../utils/getLocalStorage";
import { useState } from "react";

const allCourses = getLocalStorage();
let allTopics = [];
let totalTopics = 0;
let totalQuestions = 0;
allCourses.forEach(topic => {
    totalTopics += topic.children.length;
    allTopics.push(...topic.children)
})
allTopics.forEach(question => {
    totalQuestions += question.notes.length;
});





function Modal() {
    const [visible, setVisible] = useState(false);

    
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
    function closeModal(e) {
        const modalCover = e.currentTarget;
        if (!e.target.closest(".modal")) {
            console.log(modalCover)
            document.body.style.overflowY = "scroll";
            modalCover.style.animation = "closeModal .6s ease forwards"
        }

    }

    return (
            <div  className="message-cover" onClick={closeModal}>
                <div  className="modal">    
                    <div className="show-dev">
                        <img src="dev-1.jpg" alt="dev" className="dev" />
                        <img src="/javascript.svg" alt="javascript.svg" className="lang" />
                    </div>
                    <p className="dev-name">Anioke Sebastian</p>
                    <a href="http://wa.me/+2349030018605">wa.me/+2349030018605</a>
                    <p className="message">Hey there! I'm a student at the University of Nigeria, Nsukka. I've developed this web app to support fellow students in preparing for their upcoming exams. Wishing you all the best of luck and success in your studies and exams!</p>
                    <div className="quiz-info">
                        <QuizInfo 
                            number={allCourses.length}
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
            </div>
    )
}

export default Modal;

