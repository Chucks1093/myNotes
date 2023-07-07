import Card from "../components/Card";
import { Fragment } from "react";
import courses from "../courses/courses";
import Course from "../components/Course";
import getNotes from "../firebase/getNotes";

function Courses() {
    const data = getNotes();
    console.log(data)
    return(
        <section className="all__courses">
            {
                Object.keys(courses).map((name,i) => (
                    <Course key={i}/>)
                )
            }
        </section>
    )   
}

export default Courses;