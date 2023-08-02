import { Fragment, useEffect, useState } from "react";
import Card from "../components/Card";
import useFireBase from "../firebase/useFirebase";
useFireBase;
import Loader from "../components/Loader";
import { useLocation, useParams } from "react-router-dom";
import getLocalStorage from "../utils/getLocalStorage";

function Topics() {
	const [topics, setTopics] = useState([]);
	const { courseId } = useParams();

	useEffect(() => {
		const allCourses = getLocalStorage();
		console.log(allCourses);
		const course = allCourses.find(
			(topic) => topic.name.replace(/\s/g, "-") == courseId
		);
		setTopics(course);
	}, []);

	return (
		<Fragment>
			{topics.length == 0 ? (
				<Loader />
			) : (
				topics.children.map((topics, i) => (
					<Card
						key={i}
						name={topics.name}
						link={courseId}
						questionLength={topics.notes.length}
					/>
				))
			)}
		</Fragment>
	);
}

export default Topics;
