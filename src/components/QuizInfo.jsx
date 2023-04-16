

function QuizInfo(props) {
    return (
        <div>
            <img src={`/${props.source}.svg`} alt={props.source} />
            <p><span>{props.number}</span>{props.title}</p>
        </div>
    )
};

export default QuizInfo;

