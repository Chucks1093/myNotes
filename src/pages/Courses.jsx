import Card from "../components/Card";
import { Fragment } from "react";
import courses from "../courses/courses";


function Courses() {
    return(
        <Fragment>
            {
                Object.keys(courses).map((name,i) => (
                    <Card key={i} name={name} link="/topics" no={false} />))
            }
        </Fragment>
    )   
}

export default Courses;