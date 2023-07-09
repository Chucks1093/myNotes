import { Link } from "react-router-dom";

function Card(props) {
    const size = props.name.length < 21 ? "small-text" : "long-text";
    const link = `/${props.link}/${props.name}`.replace(/\s/g, '');    


    return(
        <article className="course">
            <Link to={link}></Link>
            <img src="/books-logo.svg" alt="book-icon" />
            <p className={`course-name ${size}`}>{props.name}</p>
            <p className="no-course-sections">{props.no} <span>cards</span></p>
        </article>
    )
}





export default Card;