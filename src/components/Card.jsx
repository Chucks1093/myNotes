import { Link } from "react-router-dom";
import courses from "../courses/courses";



function getCourseName (element) {
    const data = Object.keys(courses)
    let elementID = element.currentTarget.children[2].textContent;
    console.log(data, elementID)
    data.includes(elementID)? localStorage.setItem("name", elementID) : localStorage.setItem("section", elementID); 
};

function Card(props) {
    const size = props.name.length < 21 ? "small-text" : "long-text";
    const link = `/${props.link}/${props.name}`.replace(/\s/g, '');    


    return(
        <article onClick={getCourseName} className="course">
            <Link to={link}></Link>
            <img src="/books-logo.svg" alt="book-icon" />
            <p className={`course-name ${size}`}>{props.name}</p>
            <p className="no-course-sections">{props.no} <span>cards</span></p>
        </article>
    )
}





export default Card;