import { Fragment, useEffect, useRef } from "react";
import QuizInfo from "./QuizInfo";
import getLocalStorage from "../utils/getLocalStorage";
import { useState } from "react";

function Modal() {
	const [quizMetric, setQuizMetric] = useState({
		totalCourses: 0,
		totalTopics: 0,
		totalQuestions: 0,
	});
	useEffect(() => {
		const allCourses = getLocalStorage();
		let allTopics = [];
		let topicsCount = 0;
		let questionsCount = 0;
		allCourses.forEach((topic) => {
         topicsCount += topic.children.length;
			allTopics.push(...topic.children);
		});

		allTopics.forEach((question) => {
         if(question.notes) {
            questionsCount += question.notes.length;
            
         }
		});
		setQuizMetric({
			totalCourses: allCourses.length,
			totalTopics: topicsCount,
			totalQuestions: questionsCount,
		});
	}, []);

	function closeModal(e) {
		const modalCover = e.currentTarget;
		if (!e.target.closest(".modal")) {
			document.body.style.overflowY = "scroll";
			modalCover.style.animation = "closeModal .6s ease forwards";
		}
	}

	return (
		<div
			className="message-cover"
			onClick={closeModal}
		>
			<div className="modal">
				<div className="show-dev">
					<img
						src="dev-1.jpg"
						alt="dev"
						className="dev"
					/>
					<img
						src="/javascript.svg"
						alt="javascript.svg"
						className="lang"
					/>
				</div>
				<p className="dev-name">Anioke Sebastian</p>
				<a href="http://wa.me/+2349030018605">wa.me/+2349030018605</a>
				<p className="message">
					Hey there! I'm a student at the University of Nigeria,
					Nsukka. I've developed this web app to support fellow
					students in preparing for their upcoming exams. Wishing you
					all the best of luck and success in your studies and exams!
				</p>
				<div className="quiz-info">
					<QuizInfo
						number={quizMetric.totalCourses}
						title={"Courses"}
						source={"exam-2"}
					/>
					<QuizInfo
						number={quizMetric.totalQuestions}
						title={"Questions"}
						source={"q-a-1"}
					/>
					<QuizInfo
						number={quizMetric.totalTopics}
						title={"Topics"}
						source={"pie-1"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Modal;
