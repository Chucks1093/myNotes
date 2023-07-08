import Card from "../components/Card";
import { Fragment, useEffect, useState } from "react";
// import courses from "../courses/courses";
import Course from "../components/Course";
import getNotes from "../firebase/getNotes";
import getLocalStorage from "../utils/getLocalStorage";
import useFireBase from "../firebase/useFirebase";
import Loader from "../components/Loader";

function Courses() {
	const data = useFireBase("/");
	


	return (
		<Fragment>
		{
			data.length === 0 ? (
				<Loader />
			): (
				<section className="all__courses">
					{Object.values(data).map((name, i) => (
						<Course key={i} title={name.title} children={name.children} code ={name.name}  />
					))}
				</section>
			)
		}
		</Fragment>
	);
}

export default Courses;
