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
    return(
        <article onClick={getCourseName} className="course">
            <Link to={props.link}></Link>
            <img src="/books-logo.svg" alt="book-icon" />
            <p className={`course-name ${size}` }>{props.name}</p>
            <p className="no-course-sections">{props.no? props.no : null}{!props.no? <img src="d-link-1.svg" alt="" />: null}{props.no?(<span>cards</span>) : null}</p>
        </article>
    )
}





export default Card;