import { Fragment } from "react";
import Quiz from "../components/Quiz";
import { useState, useEffect } from "react";
import getLocalStorage from "../utils/getLocalStorage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

function Questions(props) {
	const [questions, setQuestions] = useState([]);
	const { courseId, topicId } = useParams();

	useEffect(() => {
		const allCourses = getLocalStorage();
		const topic = allCourses.find(
			(topic) => topic.name.replace(/\s/g, "-") == courseId
		).children;
		const questionList = topic.find(
			(question) => question.name.replace(/\s/g, "-") == topicId
		).notes;
		setQuestions(questionList);
	}, []);
	useEffect(() => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src =
			"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"; // use the location of your MathJax

		const config =
			"MathJax.Hub.Config({" +
			'extensions: ["tex2jax.js"],' +
			'jax: ["input/TeX","output/HTML-CSS"]' +
			"});" +
			"MathJax.Hub.Startup.onload();";

		if (window.opera) {
			script.innerHTML = config;
		} else {
			script.text = config;
		}

		script.addEventListener("load", () => {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		});

		document.getElementsByTagName("head")[0].appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<Fragment>
			{questions.length === 0 ? (
				<Loader />
			) : (
				questions.map((topics, i) => (
					<Quiz
						key={i}
						question={topics.fields[0]}
						answer={topics.fields[1]}
					/>
				))
			)}
		</Fragment>
	);
}

export default Questions;
