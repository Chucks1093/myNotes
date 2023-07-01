import { Link } from "react-router-dom";

function Course() {
	return (
        <article className="course__card">
            <div className="author__container">
                <img className="author" src="dev.jpeg" alt="" />
                <Link className="topic__link" to="/topics"><img src="course-menu.svg" alt="" /></Link>
            </div>
            <h2 className="course__title">Pharmacological Biochemistry</h2>
            <p className="course__info">Jun 28 Θ 25 Topics</p>
            <div className="course__img">
                <h3>BCH 412</h3>
            </div>
        </article>
    );
}
export default Course;
