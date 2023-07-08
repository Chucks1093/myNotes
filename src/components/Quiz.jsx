import { Fragment, useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";

function Quiz(props) {
    const [visibility, setVisibility] = useState(false);

    return(
        <article className="course-question">
            <div className="question">

                <div>{ HTMLReactParser(props.question)}</div>
                <img src={visibility? "/minus-circle.svg": "/plus-circle.svg"} alt="showBtn" onClick={()=>setVisibility(!visibility)} />
            </div>
            <div className="answer" style={{display: visibility? "block": "none"}}>{HTMLReactParser(props.answer)}</div>
        </article>
    )
}




export default Quiz;