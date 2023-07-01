import Card from "../components/Card";
import { Fragment } from "react";
import courses from "../courses/courses";
import Course from "../components/Course";


function Courses() {
    return(
        <section className="all__courses">
            {
                Object.keys(courses).map((name,i) => (
                    <Course/>)
                )
            }
        </section>
    )   
}

export default Courses;