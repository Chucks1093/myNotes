import { Link } from "react-router-dom";
import months from "../utils/months";

function Course(props) {
	const formatNo = (num) => {
		const currrentDate = new Date();
		const dateFormat = {
			day: currrentDate.getDate(),
			month: months[currrentDate.getMonth()],
		};
		const dateText = `${dateFormat.month} ${dateFormat.day}`;
		if (num < 10) {
			return `${dateText} ⨀ 0${num} Topics`;
		} else {
			return `${dateText} ⨀ ${num} Topics`;
		}
	};
	return (
		<article className="course__card">
			<div className="author__container">
				<img
					className="author"
					src="user.jpg"
					alt=""
				/>
				<Link
					className="topic__link"
					to={`/${props.code.replace(/\s/g, "-")}`}
					state={props.code}
				>
					<img
						src="course-menu.svg"
						alt=""
					/>
				</Link>
			</div>
			<h2 className="course__title">{props.title}</h2>
			<p className="course__info">{formatNo(props.children.length)}</p>
			<div className="course__img">
				<h3>{props.code}</h3>
			</div>
		</article>
	);
}
export default Course;
